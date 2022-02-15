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
const Advisormodel = require("../advisor/model");
const Department = require("../department/model");
const Student = require("../student/Model");
const Group = require("../courseGroup/model");
const CourseRooms = require("../rooms/courseRooms.model");
const user = require("../auth/model");
const dayjs = require('dayjs');
const firebase_1 = __importDefault(require("../firestore/firebase"));
class AdvisorService {
    constructor() {
        this.WEEK_DAYS = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
        this.hashPassword = (password) => __awaiter(this, void 0, void 0, function* () {
            const salt = yield bcrypt.genSalt(10);
            const hash = yield bcrypt.hash(password, salt);
            return hash;
        });
        this.getAcademicYear = () => __awaiter(this, void 0, void 0, function* () {
            const year = yield firebase_1.default.get('academic', 'qYX8QXS3XW564eKdfPTP');
            return year.data.year;
        });
        //  Create Advisor
        this.createAdvisor = (data) => __awaiter(this, void 0, void 0, function* () {
            try {
                const department = yield Advisormodel.create(Object.assign({}, data));
                if (data.user) {
                    const password = yield this.hashPassword(data.user.password);
                    yield user.create({ userName: data.user.userName, password: password, userAdvisor: department.id });
                }
                return department;
            }
            catch (error) {
                throw error;
                // throw new Error("An Error occurred while creating department!");
            }
        });
        //  Get Advisor
        this.getAdvisors = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const departments = yield Advisormodel.findAll({
                    include: [
                        { model: Department,
                            as: "Department" }
                    ]
                });
                return departments;
            }
            catch (error) {
                throw error;
            }
        });
        //  Get Advisor
        this.getAdvisor = (advisorId) => __awaiter(this, void 0, void 0, function* () {
            try {
                const year = yield this.getAcademicYear();
                const result = yield Advisormodel.findByPk(advisorId, {
                    include: [
                        {
                            model: Student,
                            as: "Students"
                        },
                        {
                            model: Group,
                            as: "Group",
                            where: {
                                year: year
                            }
                        }
                    ]
                });
                return result;
            }
            catch (error) {
                throw error;
            }
        });
        this.getTimeTable = (advisorId, year) => __awaiter(this, void 0, void 0, function* () {
            try {
                const year = yield this.getAcademicYear();
                const groups = yield Group.findAll({
                    where: { year: year, lecturerId: advisorId },
                    include: [{
                            model: CourseRooms,
                            as: "CourseRooms",
                        }]
                });
                const timetable = yield Promise.all(this.WEEK_DAYS.map((days) => __awaiter(this, void 0, void 0, function* () {
                    let weekDay = [];
                    const data = yield groups.filter((f) => f.CourseRooms.some((o) => days === null || days === void 0 ? void 0 : days.includes(o.day)));
                    if (data.length > 0) {
                        const x = yield Promise.all(yield data.map((day) => __awaiter(this, void 0, void 0, function* () {
                            const table = yield day.CourseRooms.filter((dayt) => dayt.day === days);
                            const week = yield table.map((time) => {
                                return {
                                    name: day.name,
                                    type: "custom",
                                    startTime: `2018-02-24T${time.timeStart}`,
                                    endTime: `2018-02-24T${time.timeEnd}`,
                                };
                            });
                            return week;
                        })));
                        weekDay.push(x);
                    }
                    const result = {
                        [`${days}`]: weekDay
                    };
                    return result;
                })));
                return timetable;
            }
            catch (error) {
                throw error;
            }
        });
        //  Update Department
        this.updateAdvisor = (advisorId, data) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield Advisormodel.update(Object.assign({}, data), { where: { id: advisorId } });
                const department = yield this.getAdvisor(advisorId);
                return department;
            }
            catch (error) {
                throw error;
            }
        });
        //  Delete advisor
        this.deleteAdvisor = (advisorId) => __awaiter(this, void 0, void 0, function* () {
            try {
                const department = yield Advisormodel.findOne({
                    where: {
                        id: advisorId,
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
exports.default = AdvisorService;
