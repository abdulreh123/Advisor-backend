const bcrypt = require("bcrypt");
const Advisormodel = require("../advisor/model");
const Student = require("./model");
const StudentCourses = require("./StudentCourses.model");
const Courses = require("../courses/model");
const Group = require("../courseGroup/model");
import { any } from "sequelize/types/lib/operators";
import GroupService from "../courseGroup/Service";
const GroupServices = new GroupService();
const user = require("../auth/model")
const { Op,Sequelize } = require("sequelize");
export default class DepartmentService {
  constructor() { }
  private hashPassword = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  };
  //  Create Student
  createStudent = async (data: any): Promise<any> => {
    try {
      const department = await Student.create({ ...data });
      if (data.user) {
        const password = await this.hashPassword(data.user.password)
        await user.create({ userName: data.user.userName, password: password, userStudent: department.id })
      }
      return department;
    } catch (error) {
      throw error;
      // throw new Error("An Error occurred while creating department!");
    }
  };
  //  Get Student
  getStudents = async (): Promise<any> => {
    try {
      const departments = await Student.findAll({
        include: [
          {
            model: Advisormodel,
            as: "advisor"
          },
        ]
      });
      return departments;
    } catch (error) {
      throw error;
    }
  };
  //  Get Transcript
  getTranscript = async (studentId: number): Promise<any> => {
    try {
      const result = await Student.findOne({
        where:{
          userId:studentId
        },
        include: [
          {
            model: Advisormodel,
            as: "advisor"
          },
          {
            model: Group,
            as: "Group",
            include: [{
              model: Courses,
              as: "Course",
            }],
          }
        ],
      });
      let transcript: any = []
      const groups = result.Group
      const academicYears = await groups.map((group: any) => group.studentscourses.academicYear)
      const uniqueArray = academicYears.filter(function (item: any, pos: any) {
        return academicYears.indexOf(item) == pos;
      })
    await Promise.all(  await uniqueArray.map(async (group: any) => {
        const year = await groups.filter((year: any) => year.studentscourses.academicYear === group)
        const totalcrPts =await year.map((item:any) => parseInt(item.studentscourses.CrPts)).reduce((prev:number, next:number) => prev + next);
        const totalcredit =await year.map((item:any) => parseInt(item.Course.credit)).reduce((prev:number, next:number) => prev + next);
        const data = {
          year: group,
          courses: year,
          totalcrPts:totalcrPts,
          totalcredit:totalcredit,
          gpa:totalcrPts/totalcredit
        }
        transcript.push(data)
      }))
      return transcript;
    } catch (error) {
      throw error;
    }
  };
  getStudent = async (studentId: number): Promise<any> => {
    try {
      const result = await Student.findByPk(studentId, {
        include: [
          {
            model: Advisormodel,
            as: "advisor"
          },
          {
            model: Group,
            as: "Group",
            include: [{
              model: Courses,
              as: "Course",
            }]
          }
        ]
      });
      return result;
    } catch (error) {
      throw error;
    }
  };
  getStudentByAdvisor = async (advisorId: number): Promise<any> => {
    try {
      const result = await Student.findAll({
        where:{
          advisorId:advisorId
        },
        include: [
          {
            model: Advisormodel,
            as: "advisor"
          },
          {
            model: Group,
            as: "Group",
            include: [{
              model: Courses,
              as: "Course",
            }]
          }
        ]
      });
      return result;
    } catch (error) {
      throw error;
    }
  };
  CalculateCrPoints = async (grade: string, credit: number) => {
    let points: number | undefined;
    switch (grade) {
      case "AA":
        points = 4 * credit
        break;
      case "BA":
        points = 3.5 * credit
        break;
      case "BB":
        points = 3 * credit
        break;
      case "CB":
        points = 2.5 * credit
        break;
      case "CC":
        points = 2 * credit
        break;
      case "DC":
        points = 1.5 * credit
        break;
      case "DD":
        points = 1 * credit
        break;
      case "FD":
        points = 0.5 * credit
        break;
      case "FF":
        points = 0 * credit
        break;
    }
    return points
  }
  //  Update Student
  updateStudent = async (
    studentId: number,
    data: any,
  ): Promise<any> => {
    try {
      await Student.update(
        { ...data },
        { where: { id: studentId } }
      );
      const department = await this.getStudent(studentId);
      return department;
    } catch (error) {
      throw error;
    }
  };
  addRemoveCourse = async (
    studentId: number,
    data: any,
  ) => {
    try {
      let error: string | undefined;
      const student = await this.getStudent(studentId);
      if (data.type == "add") {
        await Promise.all(await data.courses.map(async (course: number) => {
          const group = await GroupServices.getGroup(course)
          const prerequisites = group?.Course?.prerequisites
          if (prerequisites) {
            const allCode = student?.Group.map((group:any) => {
              if (group?.studentsCourses.grade) {
                return (group?.Course?.code)
              }
            })
            if (allCode.includes(prerequisites)) {
              await StudentCourses.create({ studentId: studentId, courseGroupId: course, academicYear: data?.year })
            } else {
              error = `student did not take the required prerequisites for ${group.Course.name}`
            }
          } else {
            await StudentCourses.create({ studentId: studentId, courseGroupId: course, academicYear: data.year })
          }
        }))
      }
      if (data.type == "remove") {
        await data.courses.map(async (course: number) => {
          await StudentCourses.destroy({ where: { studentId: studentId, courseGroupId: course, grade: null } })
        })
      }
      if (error) {
        throw Error(error)
      }
      return student;
    } catch (error) {
      throw error;
    }

  }

  updateGrade = async (
    studentId: number,
    courseId: number,
    data: any
  ): Promise<any> => {
    try {
      const course = await Courses.findByPk(courseId)
      const points = await this.CalculateCrPoints(data.grade, course.credit)
      await StudentCourses.update(
        {
          grade: data.grade,
          CrPts: points
        },
        { where: { studentId: studentId, courseId: courseId } }
      );
      const student = await this.getStudent(studentId);
      return student;
    } catch (error) {
      throw error;
    }
  };
  AutomateSelection = async (
    studentId: number,
    year:string
  ): Promise<any> => {
    try {
      const student = await this.getStudent(studentId);
      const coursesTaken =await student.Group.filter((course:any)=>course.studentsCourses?.grade!==null && 
      course.studentsCourses?.grade!=="FF").map((course:any)=>{
       return course?.Course.code
      })
      // get offered courses
      const allGroup=await Group.findAll({
        where:{
          year:year
        },
        include:[
          {
            model:Courses,
            as:"Course"
          }
        ]
      })
      const CoursesOffered =await allGroup?.map((course:any)=>course.Course)
      CoursesOffered.sort((a:any, b:any) => parseFloat(a.semester) - parseFloat(b.semester));
      //remove repeated courses
      const filtered=   CoursesOffered.filter((v:any,i:any,a:any)=>a.findIndex((t:any)=>(t.id === v.id))===i)
      //remove courses which are taken
      const remove =await filtered.filter((course:any)=>!coursesTaken.includes(course.code))
      //check if prerequisites is done
      const prerequisites =await remove.filter((course:any)=>coursesTaken.includes(course.prerequisites) || course.prerequisites===null)
      const totalcredit =await prerequisites.map((item:any) => parseInt(item.credit)).reduce((prev:number, next:number) => prev + next);
      let credits :number=0
      const automation= await prerequisites.map((courses:any)=>{
        if(totalcredit<21){
          return courses
        }else{
          credits=credits+courses.credit
          if(credits<21 && credits<19){
            return courses
          }
        }
      })
      const removeNull= await automation.filter((Course:any)=>Course!==undefined)
      return removeNull;
    } catch (error) {
      throw error;
    }
  };
  //  Delete Student
  deleteStudent = async (
    studentId: number,
  ): Promise<any> => {
    try {
      const department = await Student.findOne({
        where: {
          id: studentId,
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
