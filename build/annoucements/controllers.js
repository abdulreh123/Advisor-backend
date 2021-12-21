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
class AnnoucementController extends Service_1.default {
    constructor() {
        super(...arguments);
        /**
         * @param req Request
         * @param res Response
         */
        this.findAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const Annoucement = yield this.getAnnoucements();
                res.status(200).json({ success: true, cache: false, data: Annoucement });
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
         * @param req Request
         * @param res Response
         */
        this.studentAnnoucment = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { studentId } = req.params;
                const Annoucement = yield this.getStudentAnnoucements(studentId);
                res.status(200).json({ success: true, cache: false, data: Annoucement });
            }
            catch (error) {
                res.status(400).json({
                    success: false,
                    data: [],
                    message: error.message,
                });
            }
        });
        this.getDashboard = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const Annoucement = yield this.getDashboardAnnoucements();
                res.status(200).json({ success: true, cache: false, data: Annoucement });
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
                const { annoucemrntId } = req.params;
                const Annoucement = yield this.getAnnoucement(annoucemrntId);
                res.status(200).json({ success: true, data: Annoucement });
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
                if (!req.body.content) {
                    res.status(400).json({ message: "Form inputs cannot be empty" });
                }
                const Annoucement = yield this.createAnnoucement(req.body);
                res.status(200).json({ success: true, data: Annoucement, message: `Annoucement added!` });
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
                const { annoucementId } = req.params;
                const body = req.body;
                const Annoucement = yield this.updateAnnoucement(annoucementId, body);
                res.status(200).json({ success: true, data: Annoucement, message: ` Annoucement updated!` });
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
                const { annoucementId } = req.params;
                const advisors = yield this.deleteAnnoucement(annoucementId);
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
exports.default = AnnoucementController;
