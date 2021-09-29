
// const DepartmentService = require("../services/DepartmentService");
import CourseService from './Service'
export default class AdvisorController extends CourseService{
  /**
   * @desc  Get all Departments
   * @param req Request
   * @param res Response
   */
  findAll = async (req: any, res: any) => {
    try {
        const course = await this.getCourses();
        res.status(200).json({ success: true, cache: false, data: course });

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
      const { courseId } = req.params;
      const course = await this.getCourse(courseId);
      res.status(200).json({ success: true, data: course });
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
      const course = await this.createCourses(req.body);
      res.status(200).json({ success: true, data: course,message:`${course.name} added!` });
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
      const { courseId } = req.params;
      const body = req.body;
      const advisors = await this.updateCourse(courseId, body);
      res.status(200).json({ success: true, data: advisors,message:` ${advisors.name} updated!` });
    } catch (error) {
      res
        .status(400)
        .json({ success: false, data: [], message: error.message });
    }
  };

  /**
   * @desc  Update Department
   * @param req Request
   * @param res Response
   */
  AddRemoveStudent = async (req: any, res: any) => {
    try {
      const { courseId } = req.params;
      const body = req.body;
      const advisors = await this.addRemoveStudent(courseId, body);
      res.status(200).json({ success: true, data: advisors,message:` student ${body.type}!` });
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
      const { courseId } = req.params;
      const advisors = await this.deleteCourses(courseId);
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
