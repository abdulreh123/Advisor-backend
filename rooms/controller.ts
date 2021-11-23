
// const DepartmentService = require("../services/DepartmentService");
import RoomService from './RoomService'
export default class RoomController extends RoomService{
  /**
   * @desc  Get all Departments
   * @param req Request
   * @param res Response
   */
  findAll = async (req: any, res: any) => {
    try {
        const Room = await this.getRooms();
        res.status(200).json({ success: true, cache: false, data: Room });

    } catch (error) {
      res.status(400).json({
        success: false,
        data: [],
        message: error.message,
      });
    }
  };

  /**
   * @desc  Get single department
   * @param req Request
   * @param res Response
   */
  findOne = async (req: any, res: any) => {
    try {
      const { roomId } = req.params;
      const Room = await this.getRoom(roomId);
      res.status(200).json({ success: true, data: Room });
    } catch (error) {
      res.status(400).json({
        success: false,
        data: [],
        message: error.message,
      });
    }
  };

  /**
   * @desription  Create Department
   * @param req Request
   * @param res Response
   */
  create = async (req: any, res: any) => {
    try {
      if (!req.body.name) {
        res.status(400).json({ message: "Form inputs cannot be empty" });
      }
      const Room = await this.createRooms(req.body);
      res.status(200).json({ success: true, data: Room,message:`${Room.name} added!` });
    } catch (error) {
      res.status(400).json({
        success: false,
        data: [],
        message: error.message,
      });
    }
  };

  /**
   * @desc  Update Department
   * @param req Request
   * @param res Response
   */
  update = async (req: any, res: any) => {
    try {
      const { roomId } = req.params;
      const body = req.body;
      const advisors = await this.updateRooms(roomId, body);
      res.status(200).json({ success: true, data: advisors,message:` ${advisors.name} updated!` });
    } catch (error) {
      res
        .status(400)
        .json({ success: false, data: [], message: error.message });
    }
  };

  /**
   * @desc  Delete Department
   * @param req Request
   * @param res Response
   */
  delete = async (req: any, res: any) => {
    try {
      const { roomId } = req.params;
      const advisors = await this.deleteRooms(roomId);
      res.status(200).json({ success: true, data: advisors });
    } catch (error) {
      res.status(400).json({
        success: false,
        data: [],
        message: error.message,
      });
    }
  };
}
