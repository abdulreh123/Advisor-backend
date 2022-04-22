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
const FacultyModel = require("./model");
const Chairman = require("../chairman/model");
const Courses = require("../courses/model");
class FacultyService {
    constructor() {
        //  Create Faculty
        this.createFaculty = (data) => __awaiter(this, void 0, void 0, function* () {
            try {
                const faculty = yield FacultyModel.create(Object.assign({}, data));
                return faculty;
            }
            catch (error) {
                throw error;
                // throw new Error("An Error occurred while creating faculty!");
            }
        });
        //  Get Facultys
        this.getFaculties = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const faculties = yield FacultyModel.findAll({
                    include: [
                        {
                            model: Chairman,
                            as: "chairman"
                        }
                    ]
                });
                return faculties;
            }
            catch (error) {
                throw error;
                throw new Error("An Error occurred while fetching facultys!");
            }
        });
        //  Get Faculty
        this.getFaculty = (facultyId) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield FacultyModel.findByPk(facultyId);
                return result;
            }
            catch (error) {
                throw error;
                throw new Error("An Error occurred while fetching faculty!");
            }
        });
        //  Update Faculty
        this.updateFaculty = (facultyId, data) => __awaiter(this, void 0, void 0, function* () {
            try {
                const faculty = yield this.getFaculty(facultyId);
                yield FacultyModel.update(Object.assign({}, data), { where: { id: facultyId } });
                return faculty;
            }
            catch (error) {
                throw new Error("An Error occurred while updating faculties!");
            }
        });
        //  Delete Faculty
        this.deleteFaculty = (facultyId) => __awaiter(this, void 0, void 0, function* () {
            try {
                const faculty = yield FacultyModel.findOne({
                    where: {
                        id: facultyId,
                    },
                    paranoid: false,
                });
                faculty.destroy();
                return { message: "Faculty record deleted!" };
            }
            catch (error) {
                throw new Error("An Error occurred while deleting faculties!");
            }
        });
    }
}
exports.default = FacultyService;
