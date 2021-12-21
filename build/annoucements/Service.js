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
const Annoucementmodel = require("./model");
const group = require('../courseGroup/model');
const StudentCourses = require("../student/StudentCourses.model");
const { Op } = require("sequelize");
class BuildingService {
    constructor() {
        //  Create Building
        this.createAnnoucement = (data) => __awaiter(this, void 0, void 0, function* () {
            try {
                const annoucementmodel = yield Annoucementmodel.create(Object.assign({}, data));
                return annoucementmodel;
            }
            catch (error) {
                throw error;
                // throw new Error("An Error occurred while creating department!");
            }
        });
        //  Get Annoucement
        this.getAnnoucements = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const annoucement = yield Annoucementmodel.findAll({
                    include: [
                        {
                            model: group,
                            as: "Group"
                        },
                    ]
                });
                return annoucement;
            }
            catch (error) {
                throw error;
            }
        });
        //  Get Annoucement
        this.getDashboardAnnoucements = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const annoucement = yield Annoucementmodel.findAll({
                    where: {
                        groupId: null
                    },
                });
                return annoucement;
            }
            catch (error) {
                throw error;
            }
        });
        //  Get Annoucement
        this.getStudentAnnoucements = (studentId) => __awaiter(this, void 0, void 0, function* () {
            try {
                const groups = yield StudentCourses.findAll({
                    where: {
                        studentId: studentId
                    },
                });
                const ids = groups.map((group) => group.courseGroupId);
                const annoucement = yield Annoucementmodel.findAll({
                    where: {
                        groupId: {
                            [Op.or]: ids
                        }
                    },
                    include: [
                        {
                            model: group,
                            as: "Group"
                        },
                    ]
                });
                return annoucement;
            }
            catch (error) {
                throw error;
            }
        });
        //  Get Annoucement
        this.getAnnoucement = (annoucementId) => __awaiter(this, void 0, void 0, function* () {
            try {
                const annoucement = yield Annoucementmodel.findByPk(annoucementId, {
                    include: [
                        {
                            model: group,
                            as: "Group"
                        },
                    ]
                });
                return annoucement;
            }
            catch (error) {
                throw error;
            }
        });
        //  Get Annoucement by group
        this.getAnnoucementByGroup = (groupId) => __awaiter(this, void 0, void 0, function* () {
            try {
                const annoucement = yield Annoucementmodel.findOne({
                    where: {
                        groupId: groupId
                    },
                    include: [
                        {
                            model: group,
                            as: "Group"
                        },
                    ]
                });
                return annoucement;
            }
            catch (error) {
                throw error;
            }
        });
        //  Update Annoucement
        this.updateAnnoucement = (annoucementId, data) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield Annoucementmodel.update(Object.assign({}, data), { where: { id: annoucementId } });
                const annoucement = yield this.getAnnoucement(annoucementId);
                return annoucement;
            }
            catch (error) {
                throw error;
            }
        });
        //  Delete advisor
        this.deleteAnnoucement = (annoucementId) => __awaiter(this, void 0, void 0, function* () {
            try {
                const annoucement = yield Annoucementmodel.findOne({
                    where: {
                        id: annoucementId,
                    },
                    paranoid: false,
                });
                annoucement.destroy();
                return { message: "Annoucement record deleted!" };
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.default = BuildingService;
