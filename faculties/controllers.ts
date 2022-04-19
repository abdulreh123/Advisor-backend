
// const DepartmentService = require("../services/DepartmentService");
import FacultyService from './Service'
export default class FacultyController extends FacultyService{
  /**
   * @desc  Get all Departments
   * @param req Request
   * @param res Response
   */
  findAll = async (req: any, res: any) => {
    try {
        const departments = await this.getFaculties();
        res.status(200).json({ success: true, cache: false, data: departments });

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
      const { departmentId } = req.params;
      const department = await this.getFaculty(departmentId);
      res.status(200).json({ success: true, data: department });
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
      const department = await this.createFaculty(req.body);
      res.status(200).json({ success: true, data: department,message:`department ${department.name} added!` });
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
      const { departmentId } = req.params;
      const body = req.body;
      const department = await this.updateFaculty(departmentId, body);
      res.status(200).json({ success: true, data: department,message:`department ${department.name} updated!` });
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
      const { departmentId } = req.params;
      const department = await this.deleteFaculty(departmentId);
      res.status(200).json({ success: true, data: department });
    } catch (error) {
      res.status(400).json({
        success: false,
        data: [],
        message: error.message,
      });
    }
  };
}
