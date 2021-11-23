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
const Advisormodel = require("../advisor/model");
const Department = require("../department/model");
const Student = require("../student/model");
const Group = require("../courseGroup/model");
class DepartmentService {
    constructor() {
        //  Create Advisor
        this.createAdvisor = (data) => __awaiter(this, void 0, void 0, function* () {
            try {
                const department = yield Advisormodel.create(Object.assign({}, data));
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
                const result = yield Advisormodel.findByPk(advisorId, {
                    include: [
                        {
                            model: Student,
                            as: "Students"
                        },
                        {
                            model: Group,
                            as: "Group"
                        }
                    ]
                });
                return result;
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
exports.default = DepartmentService;
