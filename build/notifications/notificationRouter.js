"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const notification_controller_1 = __importDefault(require("./notification.controller"));
const NotificationController = new notification_controller_1.default();
const router = express.Router();
//Get by type
router.get("/type/:type", NotificationController.notificationsByType);
//Add a notification
router.post("/", NotificationController.create);
//Update a notification
router.patch("/:notificationIDs", NotificationController.update);
//Delete notification
router.delete("/:notificationID", NotificationController.delete);
//Get by Reciever Id
router.get("/receiver/:employeeID", NotificationController.notificationsByReceiver);
//Get by Notification Id
router.get("/:notificationID", NotificationController.notificationById);
module.exports = router;
