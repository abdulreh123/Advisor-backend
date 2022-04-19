const notificationService = require("./NotificationService");
export default class NotificationController {
   /**
    * @desc  Add a notification
    * @param req Request
    * @param res Response
    */
    create = async (req:any, res:any) => {
        try {
            const notification = await notificationService.createNotification(req.body);
            res.status(200).json({ success: true, data: notification });
        } catch (error: any) {
            res.status(400).json({
                success: false,
                data: [],
                message: error.message,
            });
        }
    }

   /**
    * @desc  Update a notification
    * @param req Request
    * @param res Response
    */
    update = async (req:any, res:any) => {
        try {
            const { notificationIDs } = req.params;
            const notifications = await notificationService.patchNotification(notificationIDs, req.body);
            res.status(200).json({ success: true, data: notifications });
        } catch (error: any) {
            res.status(400).json({
                success: false,
                data: [],
                message: error.message,
            });
        }
    }

   /**
    * @desc  Delete a notification
    * @param req Request
    * @param res Response
    */
    delete = async (req:any, res:any) => {
        try {
            const { notificationID } = req.params;
            const notification = await notificationService.deleteNotification(notificationID);
            res.status(200).json({ success: true, data: notification });
        } catch (error: any) {
            res.status(400).json({
                success: false,
                data: [],
                message: error.message,
            });
        }
    }
 
   /**
    * @desc  Get notifications by receiver ID
    * @param req Request
    * @param res Response
    */
    notificationsByReceiver = async (req:any, res:any) => {
        try{
            const { employeeID } = req.params;
            const notification = await notificationService.getNotificationsByReceiver(employeeID);
            res.status(200).json({ success: true, data: notification });
        } catch (error: any) {
            res.status(400).json({
                success: false,
                data: [],
                message: error.message,
            });
        }
    }

   /**
    * @desc  Get notifications by type
    * @param req Request
    * @param res Response
    */
    notificationsByType = async (req:any, res:any) => {
        try{
            const { type } = req.params;
            const notification = await notificationService.getNotificationsByType(type);
            res.status(200).json({ success: true, data: notification });
        } catch (error: any) {
            res.status(400).json({
                success: false,
                data: [],
                message: error.message,
            });
        }
    }

    /**
    * @desc  Get notifications by id
    * @param req Request
    * @param res Response
    */
     notificationById = async (req:any, res:any) => {
        try{
            const { notificationID } = req.params;
            const notification = await notificationService.getNotificationById(notificationID);
            res.status(200).json({ success: true, data: notification });
        } catch (error: any) {
            res.status(400).json({
                success: false,
                data: [],
                message: error.message,
            });
        }
    }
}
