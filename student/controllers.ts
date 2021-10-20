
// const DepartmentService = require("../services/DepartmentService");
import StudentService from './Service'
export default class AdvisorController extends StudentService{
  /**
   * @desc  Get all Departments
   * @param req Request
   * @param res Response
   */
  findAll = async (req: any, res: any) => {
    try {
        const advisors = await this.getStudents();
        res.status(200).json({ success: true, cache: false, data: advisors });

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
      const { studentId } = req.params;
      const advisors = await this.getStudent(studentId);
      res.status(200).json({ success: true, data: advisors });
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
  automate = async (req: any, res: any) => {
    try {
      const { studentId } = req.params;
      const { year } = req.query;
      const advisors = await this.AutomateSelection(studentId,year);
      res.status(200).json({ success: true, data: advisors });
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
  findByAdvisor = async (req: any, res: any) => {
    try {
      const { advisorId } = req.params;
      const advisors = await this.getStudentByAdvisor(advisorId);
      res.status(200).json({ success: true, data: advisors });
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
  studentTranscript = async (req: any, res: any) => {
    try {
      const { studentId } = req.params;
      const advisors = await this.getTranscript(studentId);
      res.status(200).json({ success: true, data: advisors });
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
      const advisors = await this.createStudent(req.body);
      res.status(200).json({ success: true, data: advisors,message:` ${advisors.name} added!` });
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
      const { studentId } = req.params;
      const body = req.body;
      const advisors = await this.updateStudent(studentId, body);
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
  gradeUpdate = async (req: any, res: any) => {
    try {
      const { studentId,courseId } = req.params;
      const body = req.body;
      const advisors = await this.updateGrade(studentId,courseId, body);
      res.status(200).json({ success: true, data: advisors,message:` grade Updated` });
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
  courseUpdate = async (req: any, res: any) => {
    try {
      const { studentId } = req.params;
      const body = req.body;
      const advisors = await this.addRemoveCourse(studentId, body);
      res.status(200).json({ success: true, data: advisors,message:` course ${body.type}!` });
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
      const { studentId } = req.params;
      const advisors = await this.deleteStudent(studentId);
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
