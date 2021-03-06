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
const user = require("./model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Student = require("../student/Model");
const dayjs = require('dayjs');
const chairman = require("../chairman/model");
const Advisor = require("../advisor/model");
const faculty = require("../faculties/model");
const Department = require("../department/model");
const firebase_1 = __importDefault(require("../firestore/firebase"));
const { Op } = require("sequelize");
class AuthService {
    constructor() {
        /**
        * Authenticate user via form input
        * @param data { companyEmail:string, password:string }
        */
        this.getAcademicYear = () => __awaiter(this, void 0, void 0, function* () {
            // let year: string =''
            // const month = dayjs().month()
            // const currentyear = dayjs().year()
            // if (month >= 1 && month <= 5) {
            //  year =`${currentyear-1}-${currentyear} - Spring`
            // }
            // if (month > 5 && month <= 8) {
            //  year =`${currentyear-1}-${currentyear} - Summer`
            // }
            // if (month > 8 || month < 1) {
            //  year =`${currentyear}-${currentyear + 1} - Fall`
            // }
            const year = yield firebase_1.default.get('academic', 'qYX8QXS3XW564eKdfPTP');
            return year.data.year;
        });
        //  Generate jwt token
        this.generateToken = (data) => __awaiter(this, void 0, void 0, function* () {
            try {
                const token = yield jwt.sign(data, "neuAdvisor", {
                    expiresIn: 36000,
                });
                return token;
            }
            catch (error) {
                throw (error);
            }
        });
    }
    loginViaForm(data) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3;
        return __awaiter(this, void 0, void 0, function* () {
            let status;
            try {
                const { username, password } = data;
                const users = yield user.findOne({
                    where: { userName: username },
                    include: [
                        {
                            model: Student,
                            as: "Student",
                            include: [
                                {
                                    model: Advisor,
                                    as: "advisor",
                                },
                                {
                                    model: Department,
                                    as: "Department",
                                    include: [
                                        {
                                            model: faculty,
                                            as: "Faculty"
                                        },
                                    ]
                                },
                            ]
                        },
                        {
                            model: chairman,
                            as: "chairman",
                            include: [
                                {
                                    model: Department,
                                    as: "Department",
                                    include: [
                                        {
                                            model: faculty,
                                            as: "Faculty"
                                        },
                                    ]
                                },
                            ]
                        },
                        {
                            model: Advisor,
                            as: "Advisor",
                            include: [
                                {
                                    model: Department,
                                    as: "Department",
                                    include: [
                                        {
                                            model: faculty,
                                            as: "Faculty"
                                        },
                                    ]
                                },
                            ]
                        },
                    ]
                });
                if (!users)
                    throw Error("Invalid Credentials");
                const comparePassword = yield this.comparePassword(password, users.password);
                if (!comparePassword) {
                    throw Error("Invalid Credentials");
                }
                if (users.userAdvisor) {
                    status = "Advisor";
                }
                if (users.userStudent) {
                    status = "Student";
                }
                if (users.userChairman) {
                    status = "Chairman";
                }
                if (users.userSuperAdmin) {
                    status = "SuperAdmin";
                }
                const token = yield this.generateToken({
                    userId: ((_a = users.Advisor) === null || _a === void 0 ? void 0 : _a.userId) || ((_b = users.Student) === null || _b === void 0 ? void 0 : _b.userId) || ((_c = users.Chairman) === null || _c === void 0 ? void 0 : _c.userId) || users.userSuperAdmin,
                    surname: ((_d = users.Advisor) === null || _d === void 0 ? void 0 : _d.surname) || ((_e = users.Student) === null || _e === void 0 ? void 0 : _e.surname) || ((_f = users.Chairman) === null || _f === void 0 ? void 0 : _f.surname) || users.userSuperAdmin,
                    department: ((_g = users.Advisor) === null || _g === void 0 ? void 0 : _g.Department) || ((_h = users.Student) === null || _h === void 0 ? void 0 : _h.advisor.Department) || ((_j = users.Chairman) === null || _j === void 0 ? void 0 : _j.Department) || users.userSuperAdmin,
                    status: status,
                });
                const result = {
                    token,
                    user: {
                        userId: ((_k = users.Advisor) === null || _k === void 0 ? void 0 : _k.userId) || ((_l = users.Student) === null || _l === void 0 ? void 0 : _l.userId) || ((_m = users.chairman) === null || _m === void 0 ? void 0 : _m.userId) || users.userSuperAdmin,
                        Id: ((_o = users.Advisor) === null || _o === void 0 ? void 0 : _o.id) || ((_p = users.Student) === null || _p === void 0 ? void 0 : _p.id) || ((_q = users.chairman) === null || _q === void 0 ? void 0 : _q.id) || users.userSuperAdmin,
                        username: users.userName,
                        name: ((_r = users.Advisor) === null || _r === void 0 ? void 0 : _r.name) || ((_s = users.Student) === null || _s === void 0 ? void 0 : _s.name) || ((_t = users.chairman) === null || _t === void 0 ? void 0 : _t.name) || users.name,
                        surname: ((_u = users.Advisor) === null || _u === void 0 ? void 0 : _u.surname) || ((_v = users.Student) === null || _v === void 0 ? void 0 : _v.surname) || ((_w = users.chairman) === null || _w === void 0 ? void 0 : _w.surname) || users.userSuperAdmin,
                        department: ((_x = users.Advisor) === null || _x === void 0 ? void 0 : _x.Department) || ((_y = users.Student) === null || _y === void 0 ? void 0 : _y.Department) || ((_z = users.chairman) === null || _z === void 0 ? void 0 : _z.Department) || users.userSuperAdmin,
                        faculty: ((_1 = (_0 = users.Advisor) === null || _0 === void 0 ? void 0 : _0.Department) === null || _1 === void 0 ? void 0 : _1.Faculty) || ((_2 = users.Student) === null || _2 === void 0 ? void 0 : _2.Department.Faculty) || ((_3 = users.chairman) === null || _3 === void 0 ? void 0 : _3.Department.Faculty) || users.userSuperAdmin,
                        status: status,
                    },
                };
                return result;
            }
            catch (error) {
                throw (error);
            }
        });
    }
    comparePassword(input, compare) {
        return __awaiter(this, void 0, void 0, function* () {
            const match = yield bcrypt.compare(input, compare);
            return match;
        });
    }
    /**
  * verify user
  * @param param
  */
    verifyUser(userName) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let status;
                const users = yield user.findOne({
                    where: {
                        userName: userName
                    },
                    include: [
                        {
                            model: Student,
                            as: "Student",
                            include: [
                                {
                                    model: Advisor,
                                    as: "advisor",
                                },
                                {
                                    model: Department,
                                    as: "Department",
                                    include: [
                                        {
                                            model: faculty,
                                            as: "Faculty"
                                        },
                                    ]
                                },
                            ]
                        },
                        {
                            model: chairman,
                            as: "chairman",
                            include: [
                                {
                                    model: Department,
                                    as: "Department",
                                    include: [
                                        {
                                            model: faculty,
                                            as: "Faculty"
                                        },
                                    ]
                                },
                            ]
                        },
                        {
                            model: Advisor,
                            as: "Advisor",
                            include: [
                                {
                                    model: Department,
                                    as: "Department",
                                    include: [
                                        {
                                            model: faculty,
                                            as: "Faculty"
                                        },
                                    ]
                                },
                            ]
                        },
                    ]
                });
                if (!users)
                    throw Error("User Does not Exist!");
                if (users.userAdvisor) {
                    status = "Advisor";
                }
                if (users.userStudent) {
                    status = "Student";
                }
                if (users.userChairman) {
                    status = "Chairman";
                }
                if (users.userSuperAdmin) {
                    status = "SuperAdmin";
                }
                //  If user exist and activated
                //  Generate jwt token
                const token = yield this.generateToken({
                    user: {
                        userId: ((_a = users.Advisor) === null || _a === void 0 ? void 0 : _a.userId) || ((_b = users.Student) === null || _b === void 0 ? void 0 : _b.userId) || ((_c = users.Chairman) === null || _c === void 0 ? void 0 : _c.userId) || users.userSuperAdmin,
                        surname: ((_d = users.Advisor) === null || _d === void 0 ? void 0 : _d.surname) || ((_e = users.Student) === null || _e === void 0 ? void 0 : _e.surname) || ((_f = users.Chairman) === null || _f === void 0 ? void 0 : _f.surname) || users.userSuperAdmin,
                        department: ((_g = users.Advisor) === null || _g === void 0 ? void 0 : _g.Department) || ((_h = users.Student) === null || _h === void 0 ? void 0 : _h.advisor.Department) || ((_j = users.Chairman) === null || _j === void 0 ? void 0 : _j.Department) || users.userSuperAdmin,
                        status: status,
                    },
                });
                const result = {
                    token,
                    user: {
                        userId: ((_k = users.Advisor) === null || _k === void 0 ? void 0 : _k.id) || ((_l = users.Student) === null || _l === void 0 ? void 0 : _l.userId) || ((_m = users.chairman) === null || _m === void 0 ? void 0 : _m.userId) || users.userSuperAdmin,
                        Id: ((_o = users.Advisor) === null || _o === void 0 ? void 0 : _o.id) || ((_p = users.Student) === null || _p === void 0 ? void 0 : _p.id) || ((_q = users.chairman) === null || _q === void 0 ? void 0 : _q.id) || users.userSuperAdmin,
                        username: users.userName,
                        name: ((_r = users.Advisor) === null || _r === void 0 ? void 0 : _r.name) || ((_s = users.Student) === null || _s === void 0 ? void 0 : _s.name) || ((_t = users.chairman) === null || _t === void 0 ? void 0 : _t.name) || users.name,
                        surname: ((_u = users.Advisor) === null || _u === void 0 ? void 0 : _u.surname) || ((_v = users.Student) === null || _v === void 0 ? void 0 : _v.surname) || ((_w = users.chairman) === null || _w === void 0 ? void 0 : _w.surname) || users.userSuperAdmin,
                        department: ((_x = users.Advisor) === null || _x === void 0 ? void 0 : _x.Department) || ((_y = users.Student) === null || _y === void 0 ? void 0 : _y.Department) || ((_z = users.chairman) === null || _z === void 0 ? void 0 : _z.Department) || users.userSuperAdmin,
                        faculty: ((_1 = (_0 = users.Advisor) === null || _0 === void 0 ? void 0 : _0.Department) === null || _1 === void 0 ? void 0 : _1.Faculty) || ((_2 = users.Student) === null || _2 === void 0 ? void 0 : _2.Department.Faculty) || ((_3 = users.chairman) === null || _3 === void 0 ? void 0 : _3.Department.Faculty) || users.userSuperAdmin,
                        year: yield this.getAcademicYear(),
                        status: status,
                    },
                };
                return result;
            }
            catch (error) {
                throw (error);
            }
        });
    }
}
exports.default = AuthService;
