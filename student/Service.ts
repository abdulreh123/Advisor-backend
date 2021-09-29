const bcrypt = require("bcrypt");
const AdvisorModel = require("../advisor/model");
const Student = require("./Model");
const StudentCourses = require("./StudentCourses.model");
const Courses = require("../courses/model");
const user = require("../auth/model")
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
        await user.create({ userName: data.user.username,password:password,userStudent:department.id})
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
            model: AdvisorModel,
            as: "advisor"
          },
          {
            model: Courses,
            as: "Courses"
          }
        ]
      });
      return departments;
    } catch (error) {
      throw error;
    }
  };
  //  Get Student
  getStudent = async (studentId: number): Promise<any> => {
    try {
      const result = await Student.findByPk(studentId, {
        include: [
          {
            model: AdvisorModel,
            as: "advisor"
          },
          {
            model: Courses,
            as: "Courses"
          }
        ]
      });
      return result;
    } catch (error) {
      throw error;
    }
  };
  CalculateCrPoints = async (grade: string, credit: number) => {
    let points: number
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
      if(data.type=="add"){
        await data.courses.map(async(course:number)=>{
          await StudentCourses.create({studentId:studentId ,courseId:course})
        })
      }
      if(data.type=="remove"){
        await data.courses.map(async(course:number)=>{
          await StudentCourses.destroy({where:{studentId:studentId ,courseId:course,grade:null}})
        })
      }
      const department = await this.getStudent(studentId);
      return department;
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
