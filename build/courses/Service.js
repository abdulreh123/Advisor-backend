"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const courses = require("./model");
const Student = require("../student/Model");
const Groups = require("../courseGroup/model");
const StudentCourses = require("../student/StudentCourses.model");
class CourseService {
    constructor() {
        //  Create courses
        this.createCourses = (data) => __awaiter(this, void 0, void 0, function* () {
            try {
                const Course = yield courses.create(Object.assign({}, data));
                if (data.students) {
                    yield StudentCourses.create(Object.assign({}, data.courses));
                }
                return Course;
            }
            catch (error) {
                throw error;
                // throw new Error("An Error occurred while creating department!");
            }
        });
        //  Get courses
        this.getCourses = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const Course = yield courses.findAll({});
                return Course;
            }
            catch (error) {
                throw error;
            }
        });
        //  Get Course
        this.getCourse = (courseId) => __awaiter(this, void 0, void 0, function* () {
            try {
                const course = yield courses.findByPk(courseId, {
                    include: [
                        {
                            model: Groups,
                            as: "Groups"
                        }
                    ]
                });
                return course;
            }
            catch (error) {
                throw error;
            }
        });
        //  Update course
        this.updateCourse = (courseId, data) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield courses.update(Object.assign({}, data), { where: { id: courseId } });
                const department = yield this.getCourse(courseId);
                return department;
            }
            catch (error) {
                throw error;
            }
        });
        // addRemoveStudent = async (
        //   courseId: number,
        //   data: any,
        // ) => {
        //   try {
        //     if(data.type=="added"){
        //       await data.students.map(async(students:number)=>{
        //         await StudentCourses.create({studentId:students ,courseId:courseId})
        //       })
        //     }
        //     if(data.type=="removed"){
        //       await data.students.map(async(students:number)=>{
        //         await StudentCourses.destroy({where:{studentId:students ,courseId:courseId,grade:null}})
        //       })
        //     }
        //     const department = await this.getCourse(courseId);
        //     return department;
        //   } catch (error) {
        //     throw error;
        //   }
        // }
        //  Delete advisor
        this.deleteCourses = (courseId) => __awaiter(this, void 0, void 0, function* () {
            try {
                const course = yield courses.findOne({
                    where: {
                        id: courseId,
                    },
                    paranoid: false,
                });
                course.destroy();
                return { message: "course record deleted!" };
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.default = CourseService;
