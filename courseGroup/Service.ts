

const Group = require("./model");
const Student = require("../student/Model");
const Department = require("../department/model");
const Advisor = require("../advisor/model");
const Course = require("../courses/model");
const CourseRoom = require("../rooms/courseRooms.model");
const moment = require('moment')
const momentRange = require('moment-range');
momentRange.extendMoment(moment);
import firestoreService from '../firestore/firebase'
const { Op, Sequelize } = require("sequelize");
export default class GroupService {
  constructor() { }
  //  Create Group
  createGroup = async (data: any): Promise<any> => {
    try {
      const group = await Group.create({ ...data });
      return group;
    } catch (error) {
      throw error;
      // throw new Error("An Error occurred while creating department!");
    }
  };
  //  Get Group
  getGroups = async (): Promise<any> => {
    try {
      const group = await Group.findAll({
        include: [
          {
            model: Student,
            as: "Students"
          },
          {
            model: Course,
            as: "Course",
          }
        ]
      });
      return group;
    } catch (error) {
      throw error;
    }
  };
  //  Get Group
  getLecturerGroup = async (lecturerId:number): Promise<any> => {
    try {
      const year:any =this.getActiveYear()
      console.log(year)
      const group = await Group.findAll({
        where:{
          lecturerId:lecturerId,
          year:year.data.year
        },
        include: [
          {
            model: Advisor,
            as: "Advisor",
          },
          {
            model: Student,
            as: "Students"
          },
          {
            model: Course,
            as: "Course",
          }
        ]
      });
      return group;
    } catch (error) {
      throw error;
    }
  };
  //  Get group
  getGroup = async (groupId: number): Promise<any> => {
    try {
      const group = await Group.findByPk(groupId, {
        include: [
          {
            model: Student,
            as: "Students"
          },
          {
            model: Course,
            as: "Course",
          },
          {
            model: CourseRoom,
            as: "CourseRoom",
          },
          {
            model: Advisor,
            as: "Advisor",
            include: [  {
              model: Department,
              as: "Department",
            },
            ]
          }
        ]
      });
      return group;
    } catch (error) {
      throw error;
    }
  };
  checkForClash = async (groupIds: any): Promise<any> => {
    try {
      const parse =JSON.parse(groupIds)
      const rooms = await CourseRoom.findAll(
         {
           where:{
            groupId:{
              [Op.or]:parse
            }
           },
      });
      let errors:any=[]
     await Promise.all(await rooms.map(async(room1:any)=>{
        const group1= await this.getGroup(room1.groupId)
        const sameDay = await rooms.filter((room:any)=> room.day===room1.day && room1.groupId!==room.groupId)
        const date1 = [moment(`2021-12-06 ${room1.timeStart}`), moment(`2021-12-06 ${room1.timeEnd}`)];
        const range  = moment.range(date1);
       await Promise.all(await sameDay.map(async(timings:any)=>{
          const date2 = [moment(`2021-12-06 ${timings.timeStart}`), moment(`2021-12-06 ${timings.timeEnd}`)];
          const range2 = moment.range(date2);
          // has overlapping
          if(range.overlaps(range2)) {
              if((range2.contains(range, true) || range.contains(range2, true)) && !date1[0].isSame(date2[0])){
                 const group= await this.getGroup(timings.groupId)
                 await errors.push(`${group.name} has 1 hour clash with ${group1.name}`)
              }
            else{
              const group= await this.getGroup(timings.groupId)
              throw Error(`${group.name} has a clash with ${group1.name}`)
            }
          }
        }))
        
      }))
      return errors
    } catch (error) {
      throw error;
    }
  };
  //  Get group
  getDepartmentGroup = async (departmentId: number): Promise<any> => {
    try {
      const department = await Department.findByPk(departmentId);
      console.log("efjejnef")
      console.log(departmentId)
      console.log(department.facultyId)
      const group = await Group.findAll({
        include: [
          {
            model: Student,
            as: "Students"
          },
          {
            model: Course,
            as: "Course",
              where: {
                [Op.and]:{
                  departmentId: {
                    [Op.or]: [departmentId,4]
                  },
                  facultyId: department.facultyId
                }
                }
          }
        ]
      });
      return group;
    } catch (error) {
      throw error;
    }
  };
  //  Update group
  updateGroup = async (
    groupId: number,
    data: any,
  ): Promise<any> => {
    try {
      await Group.update(
        { ...data },
        { where: { id: groupId } }
      );
      const department = await this.getGroup(groupId);
      return department;
    } catch (error) {
      throw error;
    }
  };
      /**
     * @description Set Time off signatory i.e who signs timeoff printout
     * @param data
     */
       setActiveYear = async (data: any) => {
        const year = await firestoreService.update(
            'academic',
            'qYX8QXS3XW564eKdfPTP',
            data
        )
        return year
    }
      /**
     * @description Set Time off signatory i.e who signs timeoff printout
     * @param data
     */
       getActiveYear = async () => {
        const year = await firestoreService.get(
            'academic',
            'qYX8QXS3XW564eKdfPTP',
        )
        return year
    }
  //  Delete advisor
  openSemesterCourses = async (
  ): Promise<any> => {
    try {
      let semester
      const year = await firestoreService.get(
        'academic',
        'qYX8QXS3XW564eKdfPTP',
    )
      if(year.data.year?.includes("Fall")){
        semester=[1,3,5,7]
      }
      if(year.data.year?.includes("Spring")){
        semester=[2,4,6,8]
      }
      if(!year.data.status){
        const courses = await Course.findAll({
          where:{
            semester: {
              [Op.or]: semester,
            },
          }
        })
       await courses.map(async(course:any)=>{
          const data ={
            name:course.code,
            lecturerId :4,
            courseId:course.id,
            year:year.data.year
          }
          await this.createGroup(data)
        })
        await firestoreService.update(
          'academic',
          'qYX8QXS3XW564eKdfPTP',
          {status:true}
      )
      }
    } catch (error) {
      throw error
    }
  };
  deleteGroup = async (
    groupId: number,
  ): Promise<any> => {
    try {
      const group = await Group.findOne({
        where: {
          id: groupId,
        },
        paranoid: false,
      });
      group.destroy();
      return { message: "group record deleted!" };
    } catch (error) {
      throw error
    }
  };
}
