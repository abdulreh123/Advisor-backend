"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const controllers_1 = __importDefault(require("./controllers"));
const router = express.Router();
const ChairmanControllers = new controllers_1.default();
//import Middlewares from "../helpers/Middlewares";
//const middleware = new Middlewares();
// router.use(middleware.auth);
// const seeDepartment = ["super_admin","can_see_department"];
// const updateDepartment = [
//   "super_admin",
//   "can_manage_organization",
// ];
const destroyDepartment = ["super_admin"];
router.get("/", ChairmanControllers.findAll);
router.get("/:chairmanId", ChairmanControllers.findOne);
router.put("/:chairmanId", ChairmanControllers.update);
router.post("/create", ChairmanControllers.create);
router.delete("/:chairmanId", ChairmanControllers.delete);
module.exports = router;
