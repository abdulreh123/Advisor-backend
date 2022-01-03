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
const Group = require("./model");
const Student = require("../student/Model");
const Department = require("../department/model");
const Advisor = require("../advisor/model");
const Course = require("../courses/model");
const CourseRoom = require("../rooms/courseRooms.model");
const moment = require('moment');
const momentRange = require('moment-range');
momentRange.extendMoment(moment);
const { Op, Sequelize } = require("sequelize");
class GroupService {
    constructor() {
        //  Create Group
        this.createGroup = (data) => __awaiter(this, void 0, void 0, function* () {
            try {
                const group = yield Group.create(Object.assign({}, data));
                return group;
            }
            catch (error) {
                throw error;
                // throw new Error("An Error occurred while creating department!");
            }
        });
        //  Get Group
        this.getGroups = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const group = yield Group.findAll({
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
            }
            catch (error) {
                throw error;
            }
        });
        //  Get Group
        this.getLecturerGroup = (lecturerId) => __awaiter(this, void 0, void 0, function* () {
            try {
                const group = yield Group.findAll({
                    where: {
                        lecturerId: lecturerId
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
            }
            catch (error) {
                throw error;
            }
        });
        //  Get group
        this.getGroup = (groupId) => __awaiter(this, void 0, void 0, function* () {
            try {
                const group = yield Group.findByPk(groupId, {
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
                            include: [{
                                    model: Department,
                                    as: "Department",
                                },
                            ]
                        }
                    ]
                });
                return group;
            }
            catch (error) {
                throw error;
            }
        });
        this.checkForClash = (groupIds) => __awaiter(this, void 0, void 0, function* () {
            try {
                const parse = JSON.parse(groupIds);
                const rooms = yield CourseRoom.findAll({
                    where: {
                        groupId: {
                            [Op.or]: parse
                        }
                    },
                });
                let errors = [];
                yield Promise.all(yield rooms.map((room1) => __awaiter(this, void 0, void 0, function* () {
                    const group1 = yield this.getGroup(room1.groupId);
                    const sameDay = yield rooms.filter((room) => room.day === room1.day && room1.groupId !== room.groupId);
                    const date1 = [moment(`2021-12-06 ${room1.timeStart}`), moment(`2021-12-06 ${room1.timeEnd}`)];
                    const range = moment.range(date1);
                    yield Promise.all(yield sameDay.map((timings) => __awaiter(this, void 0, void 0, function* () {
                        const date2 = [moment(`2021-12-06 ${timings.timeStart}`), moment(`2021-12-06 ${timings.timeEnd}`)];
                        const range2 = moment.range(date2);
                        // has overlapping
                        if (range.overlaps(range2)) {
                            if ((range2.contains(range, true) || range.contains(range2, true)) && !date1[0].isSame(date2[0])) {
                                const group = yield this.getGroup(timings.groupId);
                                yield errors.push(`${group.name} has 1 hour clash with ${group1.name}`);
                            }
                            else {
                                const group = yield this.getGroup(timings.groupId);
                                throw Error(`${group.name} has a clash with ${group1.name}`);
                            }
                        }
                    })));
                })));
                return errors;
            }
            catch (error) {
                throw error;
            }
        });
        //  Get group
        this.getDepartmentGroup = (departmentId) => __awaiter(this, void 0, void 0, function* () {
            try {
                const group = yield Group.findAll({
                    include: [
                        {
                            model: Student,
                            as: "Students"
                        },
                        {
                            model: Course,
                            as: "Course",
                            where: {
                                departmentId: {
                                    [Op.or]: [departmentId, 4]
                                }
                            }
                        }
                    ]
                });
                return group;
            }
            catch (error) {
                throw error;
            }
        });
        //  Update group
        this.updateGroup = (groupId, data) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield Group.update(Object.assign({}, data), { where: { id: groupId } });
                const department = yield this.getGroup(groupId);
                return department;
            }
            catch (error) {
                throw error;
            }
        });
        //  Delete advisor
        this.deleteGroup = (groupId) => __awaiter(this, void 0, void 0, function* () {
            try {
                const group = yield Group.findOne({
                    where: {
                        id: groupId,
                    },
                    paranoid: false,
                });
                group.destroy();
                return { message: "group record deleted!" };
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.default = GroupService;
