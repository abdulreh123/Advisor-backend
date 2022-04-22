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
const sequelize_1 = require("sequelize");
const Notification = require("./model");
const dayjs = require("dayjs");
//import { io } from "socket.io-client";
const env = process.env.NODE_ENV || "development";
class NotificationService {
    constructor() {
        // Create Notification
        this.createNotification = (data) => __awaiter(this, void 0, void 0, function* () {
            try {
                // const socket = io(`${process.env.SOCKET_IO_HOST}`);
                const notification = yield Notification.create(Object.assign({}, data));
                // if (data.type === "system") {
                //   socket.emit("sendSystemNotification", data.title);
                //   await EmployeeOfficial.update(
                //     { systemNotificationsStatus: true },
                //     { where: { status: this.ACTIVE_EMPLOYEE } }
                //   );
                // } else {
                //   socket.emit(
                //     "sendNotification",
                //     data.sender,
                //     data.receiver,
                //     data.content
                //   );
                // }
                return notification;
            }
            catch (error) {
                throw new Error("An Error occurred while creating notification!");
            }
        });
        // Update/Patch Notifications
        this.patchNotification = (id, data) => __awaiter(this, void 0, void 0, function* () {
            try {
                const notification = yield Notification.update(Object.assign({}, data), { where: { id: id } });
                return notification;
            }
            catch (error) {
                throw new Error("An error occurred while updating the notification!");
            }
        });
        this.deleteNotification = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                const notification = yield Notification.destroy({ where: { id } });
                return notification;
            }
            catch (error) {
                throw new Error("An error occurred while deleting the notification!");
            }
        });
        this.getNotificationsByReceiver = (employeeID) => __awaiter(this, void 0, void 0, function* () {
            try {
                const last7 = dayjs().subtract(7, "day").format("YYYY/MM/DD");
                const today = dayjs().format("YYYY/MM/DD HH:mm:ss");
                // const status: any = await EmployeeOfficial.findOne({
                //   where: { employeeID: employeeID },
                //   attributes: ["systemNotificationsStatus"],
                // });
                // const notifications = await Notification.findAll({
                //   where: {
                //     [Op.and]: [
                //       { [Op.or]: [{ receiver: employeeID }, { type: "system" }] },
                //     //  { createdAt: { [Op.gte]: last7 } },
                //     ],
                //     [Op.or]: [
                //       { release_date: null },
                //    //   { release_date: { [Op.lte]: today } },
                //     ],
                //   },
                //   order: [["id", "DESC"]],
                // });
                const notifications = yield Notification.findAll({
                    where: {
                        receiver: employeeID,
                        createdAt: { [sequelize_1.Op.gte]: last7 }
                    }
                });
                const data = {
                    notifications: notifications,
                };
                return data;
            }
            catch (error) {
                throw error;
                throw new Error(`An error occurred while querying receiver's notifications with the id of ${employeeID}!`);
            }
        });
        this.getNotificationsByType = (type) => __awaiter(this, void 0, void 0, function* () {
            try {
                const notifications = yield Notification.findAll({
                    where: { type },
                });
                return notifications;
            }
            catch (error) {
                throw new Error("An error occurred while querying notifications!");
            }
        });
        this.getNotificationById = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                const notification = yield Notification.findOne({
                    where: { id: id },
                });
                return notification;
            }
            catch (error) {
                throw new Error(`An error occurred while querying notification with id of ${id}`);
            }
        });
    }
}
exports.default = NotificationService;
