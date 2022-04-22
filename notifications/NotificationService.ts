import { Op } from "sequelize";
const Notification = require("./model");
const dayjs = require("dayjs");
//import { io } from "socket.io-client";
const env = process.env.NODE_ENV || "development";

export default  class NotificationService  {
  // Create Notification
  public createNotification = async (data: any): Promise<any> => {
    try {
     // const socket = io(`${process.env.SOCKET_IO_HOST}`);
      const notification = await Notification.create({ ...data });
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
    } catch (error) {
      throw new Error("An Error occurred while creating notification!");
    }
  };
  // Update/Patch Notifications
  public patchNotification = async (id: any, data: any): Promise<any> => {
    try {
      const notification = await Notification.update(
        { ...data },
        { where: { id: id } }
      );
      return notification;
    } catch (error) {
      throw new Error("An error occurred while updating the notification!");
    }
  };

  public deleteNotification = async (id: any): Promise<any> => {
    try {
      const notification = await Notification.destroy({ where: { id } });
      return notification;
    } catch (error) {
      throw new Error("An error occurred while deleting the notification!");
    }
  };

  public getNotificationsByReceiver = async (
    employeeID: number
  ): Promise<any> => {
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
      const notifications = await Notification.findAll({
        where:{
          receiver: employeeID ,
          createdAt: { [Op.gte]: last7 }
        }
      })
      const data = {
        notifications: notifications,
      };
      return data;
    } catch (error) {
      throw error;
      throw new Error(
        `An error occurred while querying receiver's notifications with the id of ${employeeID}!`
      );
    }
  };

  public getNotificationsByType = async (type: any): Promise<any> => {
    try {
      const notifications = await Notification.findAll({
        where: { type },
      });
      return notifications;
    } catch (error) {
      throw new Error("An error occurred while querying notifications!");
    }
  };

  public getNotificationById = async (id: number): Promise<any> => {
    try {
      const notification = await Notification.findOne({
        where: { id: id },
      });
      return notification;
    } catch (error) {
      throw new Error(
        `An error occurred while querying notification with id of ${id}`
      );
    }
  };
}


