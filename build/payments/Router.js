"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const controllers_1 = __importDefault(require("./controllers"));
const router = express.Router();
const PaymentControllers = new controllers_1.default();
//const middleware = new Middlewares();
//router.use(Middlewares.auth);
// const seeDepartment = ["super_admin","can_see_department"];
// const updateDepartment = [
//   "super_admin",
//   "can_manage_organization",
// ];
router.get("/", PaymentControllers.findAll);
router.get("/:paymentId", PaymentControllers.findOne);
router.get("/student/:studentId", PaymentControllers.findByStydent);
router.put("/:paymentId", PaymentControllers.update);
router.post("/create", PaymentControllers.create);
router.delete("/:paymentId", PaymentControllers.delete);
module.exports = router;
