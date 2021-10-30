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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcrypt");
const AdvisorModel = require("../advisor/model");
const Student = require("./Model");
const StudentCourses = require("./StudentCourses.model");
const Courses = require("../courses/model");
const Group = require("../courseGroup/model");
const Service_1 = __importDefault(require("../courseGroup/Service"));
const GroupServices = new Service_1.default();
const user = require("../auth/model");
const { Op, Sequelize } = require("sequelize");
class DepartmentService {
    constructor() {
        this.hashPassword = (password) => __awaiter(this, void 0, void 0, function* () {
            const salt = yield bcrypt.genSalt(10);
            const hash = yield bcrypt.hash(password, salt);
            return hash;
        });
        //  Create Student
        this.createStudent = (data) => __awaiter(this, void 0, void 0, function* () {
            try {
                const department = yield Student.create(Object.assign({}, data));
                if (data.user) {
                    const password = yield this.hashPassword(data.user.password);
                    yield user.create({ userName: data.user.userName, password: password, userStudent: department.id });
                }
                return department;
            }
            catch (error) {
                throw error;
                // throw new Error("An Error occurred while creating department!");
            }
        });
        //  Get Student
        this.getStudents = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const departments = yield Student.findAll({
                    include: [
                        {
                            model: AdvisorModel,
                            as: "advisor"
                        },
                    ]
                });
                return departments;
            }
            catch (error) {
                throw error;
            }
        });
        //  Get Transcript
        this.getTranscript = (studentId) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield Student.findOne({
                    where: {
                        userId: studentId
                    },
                    include: [
                        {
                            model: AdvisorModel,
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
                let transcript = [];
                const groups = result.Group;
                const academicYears = yield groups.map((group) => group.studentsCourses.academicYear);
                const uniqueArray = academicYears.filter(function (item, pos) {
                    return academicYears.indexOf(item) == pos;
                });
                yield Promise.all(yield uniqueArray.map((group) => __awaiter(this, void 0, void 0, function* () {
                    const year = yield groups.filter((year) => year.studentsCourses.academicYear === group);
                    const totalcrPts = yield year.map((item) => parseInt(item.studentsCourses.CrPts)).reduce((prev, next) => prev + next);
                    const totalcredit = yield year.map((item) => parseInt(item.Course.credit)).reduce((prev, next) => prev + next);
                    const data = {
                        year: group,
                        courses: year,
                        totalcrPts: totalcrPts,
                        totalcredit: totalcredit,
                        gpa: totalcrPts / totalcredit
                    };
                    transcript.push(data);
                })));
                return transcript;
            }
            catch (error) {
                throw error;
            }
        });
        this.getStudent = (studentId) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield Student.findByPk(studentId, {
                    include: [
                        {
                            model: AdvisorModel,
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
            }
            catch (error) {
                throw error;
            }
        });
        this.getStudentByAdvisor = (advisorId) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield Student.findAll({
                    where: {
                        advisorId: advisorId
                    },
                    include: [
                        {
                            model: AdvisorModel,
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
            }
            catch (error) {
                throw error;
            }
        });
        this.CalculateCrPoints = (grade, credit) => __awaiter(this, void 0, void 0, function* () {
            let points;
            switch (grade) {
                case "AA":
                    points = 4 * credit;
                    break;
                case "BA":
                    points = 3.5 * credit;
                    break;
                case "BB":
                    points = 3 * credit;
                    break;
                case "CB":
                    points = 2.5 * credit;
                    break;
                case "CC":
                    points = 2 * credit;
                    break;
                case "DC":
                    points = 1.5 * credit;
                    break;
                case "DD":
                    points = 1 * credit;
                    break;
                case "FD":
                    points = 0.5 * credit;
                    break;
                case "FF":
                    points = 0 * credit;
                    break;
            }
            return points;
        });
        //  Update Student
        this.updateStudent = (studentId, data) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield Student.update(Object.assign({}, data), { where: { id: studentId } });
                const department = yield this.getStudent(studentId);
                return department;
            }
            catch (error) {
                throw error;
            }
        });
        this.addRemoveCourse = (studentId, data) => __awaiter(this, void 0, void 0, function* () {
            try {
                let error;
                const student = yield this.getStudent(studentId);
                if (data.type == "add") {
                    yield Promise.all(yield data.courses.map((course) => __awaiter(this, void 0, void 0, function* () {
                        var _a;
                        const group = yield GroupServices.getGroup(course);
                        const prerequisites = (_a = group === null || group === void 0 ? void 0 : group.Course) === null || _a === void 0 ? void 0 : _a.prerequisites;
                        if (prerequisites) {
                            const allCode = student === null || student === void 0 ? void 0 : student.Group.map((group) => {
                                var _a;
                                if (group === null || group === void 0 ? void 0 : group.studentsCourses.grade) {
                                    return ((_a = group === null || group === void 0 ? void 0 : group.Course) === null || _a === void 0 ? void 0 : _a.code);
                                }
                            });
                            if (allCode.includes(prerequisites)) {
                                yield StudentCourses.create({ studentId: studentId, courseGroupId: course, academicYear: data === null || data === void 0 ? void 0 : data.year });
                            }
                            else {
                                error = `student did not take the required prerequisites for ${group.Course.name}`;
                            }
                        }
                        else {
                            yield StudentCourses.create({ studentId: studentId, courseGroupId: course, academicYear: data.year });
                        }
                    })));
                }
                if (data.type == "remove") {
                    yield data.courses.map((course) => __awaiter(this, void 0, void 0, function* () {
                        yield StudentCourses.destroy({ where: { studentId: studentId, courseGroupId: course, grade: null } });
                    }));
                }
                if (error) {
                    throw Error(error);
                }
                return student;
            }
            catch (error) {
                throw error;
            }
        });
        this.updateGrade = (studentId, courseId, data) => __awaiter(this, void 0, void 0, function* () {
            try {
                const course = yield Courses.findByPk(courseId);
                const points = yield this.CalculateCrPoints(data.grade, course.credit);
                yield StudentCourses.update({
                    grade: data.grade,
                    CrPts: points
                }, { where: { studentId: studentId, courseId: courseId } });
                const student = yield this.getStudent(studentId);
                return student;
            }
            catch (error) {
                throw error;
            }
        });
        this.AutomateSelection = (studentId, year) => __awaiter(this, void 0, void 0, function* () {
            try {
                const student = yield this.getStudent(studentId);
                const coursesTaken = yield student.Group.filter((course) => {
                    var _a, _b;
                    return ((_a = course.studentsCourses) === null || _a === void 0 ? void 0 : _a.grade) !== null &&
                        ((_b = course.studentsCourses) === null || _b === void 0 ? void 0 : _b.grade) !== "FF";
                }).map((course) => {
                    return course === null || course === void 0 ? void 0 : course.Course.code;
                });
                // get offered courses
                const allGroup = yield Group.findAll({
                    where: {
                        year: year
                    },
                    include: [
                        {
                            model: Courses,
                            as: "Course"
                        }
                    ]
                });
                const CoursesOffered = yield (allGroup === null || allGroup === void 0 ? void 0 : allGroup.map((course) => course.Course));
                CoursesOffered.sort((a, b) => parseFloat(a.semester) - parseFloat(b.semester));
                //remove repeated courses
                const filtered = CoursesOffered.filter((v, i, a) => a.findIndex((t) => (t.id === v.id)) === i);
                //remove courses which are taken
                const remove = yield filtered.filter((course) => !coursesTaken.includes(course.code));
                //check if prerequisites is done
                const prerequisites = yield remove.filter((course) => coursesTaken.includes(course.prerequisites) || course.prerequisites === null);
                const totalcredit = yield prerequisites.map((item) => parseInt(item.credit)).reduce((prev, next) => prev + next);
                let credits = 0;
                const automation = yield prerequisites.map((courses) => {
                    if (totalcredit < 21) {
                        return courses;
                    }
                    else {
                        credits = credits + courses.credit;
                        if (credits < 21 && credits < 19) {
                            return courses;
                        }
                    }
                });
                const removeNull = yield automation.filter((Course) => Course !== undefined);
                return removeNull;
            }
            catch (error) {
                throw error;
            }
        });
        //  Delete Student
        this.deleteStudent = (studentId) => __awaiter(this, void 0, void 0, function* () {
            try {
                const department = yield Student.findOne({
                    where: {
                        id: studentId,
                    },
                    paranoid: false,
                });
                department.destroy();
                return { message: "Advisor record deleted!" };
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.default = DepartmentService;
