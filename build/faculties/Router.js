"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const controllers_1 = __importDefault(require("./controllers"));
const router = express.Router();
const facultyController = new controllers_1.default();
//import Middlewares from "../helpers/Middlewares";
//const middleware = new Middlewares();
// router.use(middleware.auth);
// const seeDepartment = ["super_admin","can_see_department"];
// const updateDepartment = [
//   "super_admin",
//   "can_manage_organization",
// ];
const destroyDepartment = ["super_admin"];
router.get("/", facultyController.findAll);
router.get("/:departmentId", facultyController.findOne);
router.put("/:departmentId", facultyController.update);
router.post("/create", facultyController.create);
router.delete("/:departmentId", facultyController.delete);
module.exports = router;
