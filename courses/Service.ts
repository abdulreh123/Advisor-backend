
const courses = require("./model");
const Student = require("../student/Model");
const StudentCourses = require("../student/StudentCourses.model");

export default class CourseService {
  constructor() { }
  //  Create courses
  createCourses = async (data: any): Promise<any> => {
    try {
      const Course = await courses.create({ ...data });
      if(data.students){
      await  StudentCourses.create({...data.courses})
      }
      return Course;
    } catch (error) {
      throw error;
      // throw new Error("An Error occurred while creating department!");
    }
  };
  //  Get courses
  getCourses = async (): Promise<any> => {
    try {
      const Course = await courses.findAll({});
      return Course;
    } catch (error) {
      throw error;
    }
  };
  //  Get Course
  getCourse = async (courseId: number): Promise<any> => {
    try {
      const course = await courses.findByPk(courseId, {
        include: [
          {
            model: Student,
            as: "Students"
          }
        ]
      });
      return course;
    } catch (error) {
      throw error;
    }
  };
  //  Update course
  updateCourse = async (
    courseId: number,
    data: any,
  ): Promise<any> => {
    try {
      await courses.update(
        { ...data },
        { where: { id: courseId } }
      );
      const department = await this.getCourse(courseId);
      return department;
    } catch (error) {
      throw error;
    }
  };  
  addRemoveStudent = async (
    courseId: number,
    data: any,
  ) => {
    try {
      if(data.type=="added"){
        await data.students.map(async(students:number)=>{
          await StudentCourses.create({studentId:students ,courseId:courseId})
        })
      }
      if(data.type=="removed"){
        await data.students.map(async(students:number)=>{
          await StudentCourses.destroy({where:{studentId:students ,courseId:courseId,grade:null}})
        })
      }
      const department = await this.getCourse(courseId);
      return department;
    } catch (error) {
      throw error;
    }

  }
  //  Delete advisor
  deleteCourses = async (
    courseId: number,
  ): Promise<any> => {
    try {
      const course = await courses.findOne({
        where: {
          id: courseId,
        },
        paranoid: false,
      });
      course.destroy();
      return { message: "course record deleted!" };
    } catch (error) {
      throw error
    }
  };
}
