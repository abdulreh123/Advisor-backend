
// const DepartmentService = require("../services/DepartmentService");
import BuildingService from './Service'
export default class BuildingController extends BuildingService{
  /**
   * @desc  Get all Departments
   * @param req Request
   * @param res Response
   */
  findAll = async (req: any, res: any) => {
    try {
        const Building = await this.getBuildings();
        res.status(200).json({ success: true, cache: false, data: Building });

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
      const { buildingId } = req.params;
      const Building = await this.getBuilding(buildingId);
      res.status(200).json({ success: true, data: Building });
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
      const Building = await this.createBuilding(req.body);
      res.status(200).json({ success: true, data: Building,message:`${Building.name} added!` });
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
      const { buildingId } = req.params;
      const body = req.body;
      const advisors = await this.updateBuilding(buildingId, body);
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
      const { buildingId } = req.params;
      const advisors = await this.deleteBuilding(buildingId);
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
