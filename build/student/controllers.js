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
                const advisors = yield this.getStudents();
                res.status(200).json({ success: true, cache: false, data: advisors });
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
                const { studentId } = req.params;
                const advisors = yield this.getStudent(studentId);
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
        /**
         * @desc  Get single department
         * @param req Request
         * @param res Response
         */
        this.automate = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { studentId } = req.params;
                const { year } = req.query;
                const advisors = yield this.AutomateSelection(studentId, year);
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
        /**
         * @desc  Get single department
         * @param req Request
         * @param res Response
         */
        this.findByAdvisor = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { advisorId } = req.params;
                const advisors = yield this.getStudentByAdvisor(advisorId);
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
        /**
         * @desc  Get single department
         * @param req Request
         * @param res Response
         */
        this.studentTranscript = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { studentId } = req.params;
                const advisors = yield this.getTranscript(studentId);
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
                const advisors = yield this.createStudent(req.body);
                res.status(200).json({ success: true, data: advisors, message: ` ${advisors.name} added!` });
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
                const { studentId } = req.params;
                const body = req.body;
                const advisors = yield this.updateStudent(studentId, body);
                res.status(200).json({ success: true, data: advisors, message: ` ${advisors.name} updated!` });
            }
            catch (error) {
                res
                    .status(400)
                    .json({ success: false, data: [], message: error.message });
            }
        });
        /**
         * @desc  Update Department
         * @param req Request
         * @param res Response
         */
        this.gradeUpdate = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { studentId, courseId } = req.params;
                const body = req.body;
                const advisors = yield this.updateGrade(studentId, courseId, body);
                res.status(200).json({ success: true, data: advisors, message: ` grade Updated` });
            }
            catch (error) {
                res
                    .status(400)
                    .json({ success: false, data: [], message: error.message });
            }
        });
        /**
         * @desc  Update Department
         * @param req Request
         * @param res Response
         */
        this.courseUpdate = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { studentId } = req.params;
                const body = req.body;
                const advisors = yield this.addRemoveCourse(studentId, body);
                res.status(200).json({ success: true, data: advisors, message: ` course ${body.type}!` });
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
                const { studentId } = req.params;
                const advisors = yield this.deleteStudent(studentId);
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
