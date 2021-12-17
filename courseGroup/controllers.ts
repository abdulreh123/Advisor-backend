
// const DepartmentService = require("../services/DepartmentService");
import GroupService from './Service'
export default class AdvisorController extends GroupService{
  /**
   * @desc  Get all Departments
   * @param req Request
   * @param res Response
   */
  findAll = async (req: any, res: any) => {
    try {
        const Group = await this.getGroups();
        res.status(200).json({ success: true, cache: false, data: Group });

    } catch (error:any) {
      res.status(400).json({
        success: false,
        data: [],
        message: error.message,
      });
    }
  };
  /**
   * @desc  Get all Departments
   * @param req Request
   * @param res Response
   */
  findByDepartment = async (req: any, res: any) => {
    try {
      const { departmentId } = req.params;
        const Group = await this.getDepartmentGroup(departmentId);
        res.status(200).json({ success: true, cache: false, data: Group });

    } catch (error:any) {
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
      const { groupId } = req.params;
      const Group = await this.getGroup(groupId);
      res.status(200).json({ success: true, data: Group });
    } catch (error:any) {
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
  clash = async (req: any, res: any) => {
    try {
      const { groupIds } = req.params;
      const Group = await this.checkForClash(groupIds);
      res.status(200).json({ success: true, data: Group });
    } catch (Error:any) {
      res.status(400).json({
        success: false,
        data: [],
        message: Error.message,
      });
    }
  };
  /**
   * @desc  Get single department
   * @param req Request
   * @param res Response
   */
  findByLecturer = async (req: any, res: any) => {
    try {
      const { lecturerId } = req.params;
      const Group = await this.getLecturerGroup(lecturerId);
      res.status(200).json({ success: true, data: Group });
    } catch (error:any) {
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
      const Group = await this.createGroup(req.body);
      res.status(200).json({ success: true, data: Group,message:`${Group.name} added!` });
    } catch (error:any) {
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
      const { groupId } = req.params;
      const body = req.body;
      const advisors = await this.updateGroup(groupId, body);
      res.status(200).json({ success: true, data: advisors,message:` ${advisors.name} updated!` });
    } catch (error:any) {
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
      const { groupId } = req.params;
      const advisors = await this.deleteGroup(groupId);
      res.status(200).json({ success: true, data: advisors });
    } catch (error:any) {
      res.status(400).json({
        success: false,
        data: [],
        message: error.message,
      });
    }
  };
}
