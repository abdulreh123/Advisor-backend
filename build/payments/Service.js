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
const Students = require("../student/model");
const Payments = require("./Model");
const { Op, Sequelize } = require("sequelize");
class PaymentsService {
    constructor() {
        //  Create Student
        this.createPayment = (data) => __awaiter(this, void 0, void 0, function* () {
            try {
                const payments = yield Payments.create(Object.assign({}, data));
                return payments;
            }
            catch (error) {
                throw error;
                // throw new Error("An Error occurred while creating payments!");
            }
        });
        //  Get Student
        this.getPayments = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const payments = yield Payments.findAll({
                // include: [
                //   {
                //     model: Students,
                //     as: "Student"
                //   },
                // ]
                });
                return payments;
            }
            catch (error) {
                throw error;
            }
        });
        this.getPayment = (paymentId) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield Payments.findByPk(paymentId, {
                // include: [
                //   {
                //     model: Students,
                //     as: "Student"
                //   },
                // ]
                });
                return result;
            }
            catch (error) {
                throw error;
            }
        });
        this.getPaymentByStudents = (StudentId) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield Payments.findAll({
                    where: {
                        StudentId: StudentId
                    },
                });
                return result;
            }
            catch (error) {
                throw error;
            }
        });
        //  Update Student
        this.updatePayment = (paymentId, data) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield Payments.update(Object.assign({}, data), { where: { id: paymentId } });
                const payments = yield this.getPayment(paymentId);
                return payments;
            }
            catch (error) {
                throw error;
            }
        });
        //  Delete Student
        this.deletePayment = (paymentId) => __awaiter(this, void 0, void 0, function* () {
            try {
                const payments = yield Payments.findOne({
                    where: {
                        id: paymentId,
                    },
                    paranoid: false,
                });
                payments.destroy();
                return { message: "Payments record deleted!" };
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.default = PaymentsService;
