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
const chairman = require("./model");
const department = require("../department/model");
const { Op, Sequelize } = require("sequelize");
const Courses = require("../courses/model");
const Student = require("../student/Model");
const Advisor = require("../advisor/model");
class ChairmanService {
    constructor() {
        //  Create Chairmans
        this.createChairmans = (data) => __awaiter(this, void 0, void 0, function* () {
            try {
                const Chairman = yield chairman.create(Object.assign({}, data));
                return Chairman;
            }
            catch (error) {
                throw error;
                // throw new Error("An Error occurred while creating department!");
            }
        });
        //  Get Chairmans
        this.getChairmans = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const Chairman = yield chairman.findAll({});
                return Chairman;
            }
            catch (error) {
                throw error;
            }
        });
        //  Get Chairman
        this.getChairman = (ChairmanId) => __awaiter(this, void 0, void 0, function* () {
            try {
                const Chairman = yield chairman.findByPk(ChairmanId, {
                    include: [
                        {
                            model: department,
                            as: "Department"
                        }
                    ]
                });
                return Chairman;
            }
            catch (error) {
                throw error;
            }
        });
        //  Update Chairman
        this.updateChairman = (ChairmanId, data) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield chairman.update(Object.assign({}, data), { where: { id: ChairmanId } });
                const department = yield this.getChairman(ChairmanId);
                return department;
            }
            catch (error) {
                throw error;
            }
        });
        this.getChairmansStat = (departmentId) => __awaiter(this, void 0, void 0, function* () {
            try {
                const courses = yield Courses.findAll({
                    where: {
                        departmentId: {
                            [Op.or]: [departmentId, 4]
                        }
                    }
                });
                const student = yield Student.findAll({
                    include: [
                        {
                            model: Advisor,
                            as: "advisor",
                            include: [
                                {
                                    model: department,
                                    as: "Department",
                                    where: {
                                        id: departmentId
                                    }
                                },
                            ]
                        },
                    ]
                });
                const advisors = yield Advisor.findAll({
                    include: [
                        {
                            model: department,
                            as: "Department",
                            where: {
                                id: departmentId
                            }
                        },
                    ]
                });
                const totalcredit = yield courses.map((item) => parseInt(item.credit)).reduce((prev, next) => prev + next);
                const allStudents = yield student.filter((item) => item.advisor !== null);
                const data = {
                    courses: courses.length,
                    students: allStudents.length,
                    advisors: advisors.length,
                    totalCredits: totalcredit
                };
                return data;
            }
            catch (error) {
                throw error;
            }
        });
        //  Delete advisor
        this.deleteChairman = (ChairmanId) => __awaiter(this, void 0, void 0, function* () {
            try {
                const Chairman = yield chairman.findOne({
                    where: {
                        id: ChairmanId,
                    },
                    paranoid: false,
                });
                Chairman.destroy();
                return { message: "Chairman record deleted!" };
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.default = ChairmanService;
