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
const uploadFile = require("../helpers/paymentUploads");
class PaymentController extends Service_1.default {
    constructor() {
        super(...arguments);
        /**
         * @desc  Get all Departments
         * @param req Request
         * @param res Response
         */
        this.findAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const advisors = yield this.getPayments();
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
                const { paymentId } = req.params;
                const payment = yield this.getPayment(paymentId);
                res.status(200).json({ success: true, data: payment });
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
        this.findByStydent = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { studentId } = req.params;
                const payment = yield this.getPaymentByStudents(studentId);
                res.status(200).json({ success: true, data: payment });
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
                yield uploadFile(req, res);
                const { document } = req.body;
                const files = req.files;
                const attachments = [];
                files.map((file) => {
                    attachments.push(file.path);
                });
                const bodyData = JSON.parse(document);
                const Payments = yield this.createPayment(bodyData);
                res.status(200).json({ success: true, data: Payments, message: ` Payment added!` });
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
                const { paymentId } = req.params;
                const body = req.body;
                const Payments = yield this.updatePayment(paymentId, body);
                res.status(200).json({ success: true, data: Payments, message: ` payment updated!` });
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
                const { paymentId } = req.params;
                const Payments = yield this.deletePayment(paymentId);
                res.status(200).json({ success: true, data: Payments });
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
exports.default = PaymentController;
