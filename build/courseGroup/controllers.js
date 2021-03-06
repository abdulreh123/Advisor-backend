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
// const DepartmentService = require("../services/DepartmentService");
const Service_1 = __importDefault(require("./Service"));
class AdvisorController extends Service_1.default {
    constructor() {
        super(...arguments);
        /**
         * @desc  Get all Departments
         * @param req Request
         * @param res Response
         */
        this.findAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const Group = yield this.getGroups();
                res.status(200).json({ success: true, cache: false, data: Group });
            }
            catch (error) {
                res.status(400).json({
                    success: false,
                    data: [],
                    message: error.message,
                });
            }
        });
        /**
         * @desc  Get all Departments
         * @param req Request
         * @param res Response
         */
        this.findByDepartment = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { departmentId } = req.params;
                const Group = yield this.getDepartmentGroup(departmentId);
                res.status(200).json({ success: true, cache: false, data: Group });
            }
            catch (error) {
                res.status(400).json({
                    success: false,
                    data: [],
                    message: error.message,
                });
            }
        });
        /**
         * @desc  Get single department
         * @param req Request
         * @param res Response
         */
        this.findOne = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { groupId } = req.params;
                const Group = yield this.getGroup(groupId);
                res.status(200).json({ success: true, data: Group });
            }
            catch (error) {
                res.status(400).json({
                    success: false,
                    data: [],
                    message: error.message,
                });
            }
        });
        /**
         * @description Set Time Off Signatory
         * @param req
         * @param res
         */
        this.setYear = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.setActiveYear(req.body);
                res.status(200).json({ success: true, data: data });
            }
            catch (error) {
                res.status(400).json({
                    success: false,
                    data: [],
                    message: error.message,
                });
            }
        });
        /**
         * @description Set Time Off Signatory
         * @param req
         * @param res
         */
        this.getYear = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.getActiveYear();
                res.status(200).json({ success: true, data: data });
            }
            catch (error) {
                res.status(400).json({
                    success: false,
                    data: [],
                    message: error.message,
                });
            }
        });
        /**
         * @description Set Time Off Signatory
         * @param req
         * @param res
         */
        this.offerCourses = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.openSemesterCourses();
                res.status(200).json({ success: true, data: data });
            }
            catch (error) {
                res.status(400).json({
                    success: false,
                    data: [],
                    message: error.message,
                });
            }
        });
        /**
         * @desc  Get single department
         * @param req Request
         * @param res Response
         */
        this.clash = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { groupIds } = req.params;
                const Group = yield this.checkForClash(groupIds);
                res.status(200).json({ success: true, data: Group });
            }
            catch (Error) {
                res.status(400).json({
                    success: false,
                    data: [],
                    message: Error.message,
                });
            }
        });
        /**
         * @desc  Get single department
         * @param req Request
         * @param res Response
         */
        this.findByLecturer = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { lecturerId } = req.params;
                const Group = yield this.getLecturerGroup(lecturerId);
                res.status(200).json({ success: true, data: Group });
            }
            catch (error) {
                res.status(400).json({
                    success: false,
                    data: [],
                    message: error.message,
                });
            }
        });
        /**
         * @desription  Create Department
         * @param req Request
         * @param res Response
         */
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.body.name) {
                    res.status(400).json({ message: "Form inputs cannot be empty" });
                }
                const Group = yield this.createGroup(req.body);
                res.status(200).json({ success: true, data: Group, message: `${Group.name} added!` });
            }
            catch (error) {
                res.status(400).json({
                    success: false,
                    data: [],
                    message: error.message,
                });
            }
        });
        /**
         * @desc  Update Department
         * @param req Request
         * @param res Response
         */
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { groupId } = req.params;
                const body = req.body;
                const advisors = yield this.updateGroup(groupId, body);
                res.status(200).json({ success: true, data: advisors, message: ` ${advisors.name} updated!` });
            }
            catch (error) {
                res
                    .status(400)
                    .json({ success: false, data: [], message: error.message });
            }
        });
        /**
         * @desc  Delete Department
         * @param req Request
         * @param res Response
         */
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { groupId } = req.params;
                const advisors = yield this.deleteGroup(groupId);
                res.status(200).json({ success: true, data: advisors });
            }
            catch (error) {
                res.status(400).json({
                    success: false,
                    data: [],
                    message: error.message,
                });
            }
        });
    }
}
exports.default = AdvisorController;
