import express = require("express");
import notificationController from "./notification.controller";

const NotificationController = new notificationController();
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
