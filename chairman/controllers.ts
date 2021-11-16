
// const DepartmentService = require("../services/DepartmentService");
import ChairmanService from './Service'
export default class AdvisorController extends ChairmanService{
  /**
   * @desc  Get all Departments
   * @param req Request
   * @param res Response
   */
  findAll = async (req: any, res: any) => {
    try {
        const Chairman = await this.getChairmans();
        res.status(200).json({ success: true, cache: false, data: Chairman });

    } catch (error) {
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
  getStat = async (req: any, res: any) => {
    try {
      const { departmentId } = req.params;
        const Chairman = await this.getChairmansStat(departmentId);
        res.status(200).json({ success: true, cache: false, data: Chairman });

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
      const { chairmanId } = req.params;
      const Chairman = await this.getChairman(chairmanId);
      res.status(200).json({ success: true, data: Chairman });
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
      const Chairman = await this.createChairmans(req.body);
      res.status(200).json({ success: true, data: Chairman,message:`${Chairman.name} added!` });
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
      const { chairmanId } = req.params;
      const body = req.body;
      const advisors = await this.updateChairman(chairmanId, body);
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
      const { chairmanId } = req.params;
      const advisors = await this.deleteChairman(chairmanId);
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
