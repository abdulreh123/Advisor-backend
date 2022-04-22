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
const NotificationService_1 = __importDefault(require("./NotificationService"));
class NotificationController extends NotificationService_1.default {
    constructor() {
        super(...arguments);
        /**
         * @desc  Add a notification
         * @param req Request
         * @param res Response
         */
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const notification = yield this.createNotification(req.body);
                res.status(200).json({ success: true, data: notification });
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
         * @desc  Update a notification
         * @param req Request
         * @param res Response
         */
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { notificationIDs } = req.params;
                const notifications = yield this.patchNotification(notificationIDs, req.body);
                res.status(200).json({ success: true, data: notifications });
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
         * @desc  Delete a notification
         * @param req Request
         * @param res Response
         */
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { notificationID } = req.params;
                const notification = yield this.deleteNotification(notificationID);
                res.status(200).json({ success: true, data: notification });
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
         * @desc  Get notifications by receiver ID
         * @param req Request
         * @param res Response
         */
        this.notificationsByReceiver = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { employeeID } = req.params;
                const notification = yield this.getNotificationsByReceiver(employeeID);
                res.status(200).json({ success: true, data: notification });
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
         * @desc  Get notifications by type
         * @param req Request
         * @param res Response
         */
        this.notificationsByType = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { type } = req.params;
                const notification = yield this.getNotificationsByType(type);
                res.status(200).json({ success: true, data: notification });
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
        * @desc  Get notifications by id
        * @param req Request
        * @param res Response
        */
        this.notificationById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { notificationID } = req.params;
                const notification = yield this.getNotificationById(notificationID);
                res.status(200).json({ success: true, data: notification });
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
exports.default = NotificationController;
