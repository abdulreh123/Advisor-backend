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
                const Chairman = yield this.getChairmans();
                res.status(200).json({ success: true, cache: false, data: Chairman });
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
                const { chairmanId } = req.params;
                const Chairman = yield this.getChairman(chairmanId);
                res.status(200).json({ success: true, data: Chairman });
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
                const Chairman = yield this.createChairmans(req.body);
                res.status(200).json({ success: true, data: Chairman, message: `${Chairman.name} added!` });
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
                const { chairmanId } = req.params;
                const body = req.body;
                const advisors = yield this.updateChairman(chairmanId, body);
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
                const { chairmanId } = req.params;
                const advisors = yield this.deleteChairman(chairmanId);
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
