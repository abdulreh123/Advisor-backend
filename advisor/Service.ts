const bcrypt = require("bcrypt");
const Advisormodel = require("../advisor/model");
const Department = require("../department/model");
const Student = require("../student/Model");
const Group = require("../courseGroup/model");
const CourseRooms = require("../rooms/courseRooms.model");
const user = require("../auth/model")
const dayjs = require('dayjs')

export default class AdvisorService {
  public WEEK_DAYS = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
  constructor() { }
  private hashPassword = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  };
  private getAcademicYear = async() => {
    let year: string =''
    const month = dayjs().month()
    const currentyear = dayjs().year()
    if (month >= 1 && month <= 5) {
     year =`${currentyear-1}-${currentyear} - Spring`
    }
    if (month > 5 && month <= 8) {
     year =`${currentyear-1}-${currentyear} - Summer`
    }
    if (month > 8 || month < 1) {
     year =`${currentyear}-${currentyear + 1} - Fall`
    }
    return year
  }
  //  Create Advisor
  createAdvisor = async (data: any): Promise<any> => {
    try {
      const department = await Advisormodel.create({ ...data });
      if(data.user){
        const password = await this.hashPassword(data.user.password)
        await user.create({ userName: data.user.userName, password: password, userAdvisor: department.id })
      }
      return department;
    } catch (error) {
      throw error;
      // throw new Error("An Error occurred while creating department!");
    }
  };
  //  Get Advisor
  getAdvisors = async (): Promise<any> => {
    try {
      const departments = await Advisormodel.findAll({
        include:[
          {model:Department,
          as:"Department"}
        ]
      });
      return departments;
    } catch (error) {
      throw error;
    }
  };
  //  Get Advisor
  getAdvisor = async (advisorId: number): Promise<any> => {
    try {
      const year = await this.getAcademicYear()
      const result = await Advisormodel.findByPk(advisorId, {
        include: [
          {
            model: Student,
            as: "Students"
          },
          {
            model: Group,
            as: "Group",
            // where:{
            //   year:year
            // }
          }
        ]
      });
      return result;
    } catch (error) {
      throw error;
    }
  };
  getTimeTable = async (advisorId: number, year: string): Promise<any> => {
    try {
      const groups = await Group.findAll({
            where: { year: year,lecturerId:advisorId },
            include: [{
              model: CourseRooms,
              as: "CourseRooms",
            }]
      });
      const timetable = await Promise.all(this.WEEK_DAYS.map(async (days: string) => {
        let weekDay: any = []
        const data = await groups.filter((f: any) =>
          f.CourseRooms.some((o: any) => days?.includes(o.day))
        )
        if (data.length > 0) {
          const x = await Promise.all(await data.map(async (day: any) => {
            const table = await day.CourseRooms.filter((dayt: any) => dayt.day === days)
            const week = await table.map((time: any) => {
              return {
                name: day.name,
                type: "custom",
                startTime: `2018-02-24T${time.timeStart}`,
                endTime: `2018-02-24T${time.timeEnd}`,
              }
            })
            return week
          }))

          weekDay.push(x)
        }
        const result = {
          [`${days}`]: weekDay
        }
        return result
      }))

      return timetable;
    } catch (error) {
      throw error;
    }
  };
  //  Update Department
  updateAdvisor = async (
    advisorId: number,
    data: any,
  ): Promise<any> => {
    try {
      await Advisormodel.update(
        { ...data },
        { where: { id: advisorId } }
      );
      const department = await this.getAdvisor(advisorId);
      return department;
    } catch (error) {
      throw error;
    }
  };
  
  //  Delete advisor
  deleteAdvisor = async (
    advisorId: number,
  ): Promise<any> => {
    try {
      const department = await Advisormodel.findOne({
        where: {
          id: advisorId,
        },
        paranoid: false,
      });
      department.destroy();
      return { message: "Advisor record deleted!" };
    } catch (error) {
      throw error
    }
  };
}
