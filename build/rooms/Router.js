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
router.get("/", RoomControllers.findAll);
router.get("/availability", RoomControllers.getAvailable);
router.get("/:roomId", RoomControllers.findOne);
router.put("/:roomId", RoomControllers.update);
router.post("/create", RoomControllers.create);
router.post("/create/grouproom", RoomControllers.createGroup);
router.delete("/:roomId", RoomControllers.delete);
module.exports = router;
