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
const Departmentmodel = require("./model");
const Chairman = require("../chairman/model");
const Courses = require("../courses/model");
class DepartmentService {
    constructor() {
        //  Create Department
        this.createDepartment = (data) => __awaiter(this, void 0, void 0, function* () {
            try {
                const department = yield Departmentmodel.create(Object.assign({}, data));
                return department;
            }
            catch (error) {
                throw error;
                // throw new Error("An Error occurred while creating department!");
            }
        });
        //  Get Departments
        this.getDepartments = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const departments = yield Departmentmodel.findAll({
                    include: [
                        {
                            model: Chairman,
                            as: "chairman"
                        }
                    ]
                });
                return departments;
            }
            catch (error) {
                throw error;
                throw new Error("An Error occurred while fetching departments!");
            }
        });
        //  Get Department
        this.getDepartment = (departmentId) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield Departmentmodel.findByPk(departmentId, {
                    include: [
                        {
                            model: Courses,
                            as: "courses"
                        }
                    ]
                });
                return result;
            }
            catch (error) {
                throw error;
                throw new Error("An Error occurred while fetching department!");
            }
        });
        //  Update Department
        this.updateDepartment = (departmentId, data) => __awaiter(this, void 0, void 0, function* () {
            try {
                const department = yield this.getDepartment(departmentId);
                yield Departmentmodel.update(Object.assign({}, data), { where: { id: departmentId } });
                return department;
            }
            catch (error) {
                throw new Error("An Error occurred while updating departments!");
            }
        });
        //  Delete Department
        this.deleteDepartment = (departmentId) => __awaiter(this, void 0, void 0, function* () {
            try {
                const department = yield Departmentmodel.findOne({
                    where: {
                        id: departmentId,
                    },
                    paranoid: false,
                });
                department.destroy();
                return { message: "Department record deleted!" };
            }
            catch (error) {
                throw new Error("An Error occurred while deleting departments!");
            }
        });
    }
}
exports.default = DepartmentService;
