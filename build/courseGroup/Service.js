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
const Course = require("../courses/model");
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
