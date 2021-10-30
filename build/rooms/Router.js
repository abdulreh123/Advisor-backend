"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const controller_1 = __importDefault(require("./controller"));
const router = express.Router();
const RoomControllers = new controller_1.default();
//import Middlewares from "../helpers/Middlewares";
//const middleware = new Middlewares();
// router.use(middleware.auth);
// const seeDepartment = ["super_admin","can_see_department"];
// const updateDepartment = [
//   "super_admin",
//   "can_manage_organization",
// ];
const destroyDepartment = ["super_admin"];
router.get("/", RoomControllers.findAll);
router.get("/:roomId", RoomControllers.findOne);
router.put("/:roomId", RoomControllers.update);
router.post("/create", RoomControllers.create);
router.delete("/:roomId", RoomControllers.delete);
module.exports = router;
