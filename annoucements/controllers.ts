
// const DepartmentService = require("../services/DepartmentService");
import AnnoucementsService from './Service'
export default class AnnoucementController extends AnnoucementsService{
  /**
   * @param req Request
   * @param res Response
   */
  findAll = async (req: any, res: any) => {
    try {
        const Annoucement = await this.getAnnoucements();
        res.status(200).json({ success: true, cache: false, data: Annoucement });

    } catch (error) {
      res.status(400).json({
        success: false,
        data: [],
        message: error.message,
      });
    }
  };
  /**
   * @param req Request
   * @param res Response
   */
  studentAnnoucment = async (req: any, res: any) => {
    try {
      
      const { studentId } = req.params;
        const Annoucement = await this.getStudentAnnoucements(studentId);
        res.status(200).json({ success: true, cache: false, data: Annoucement });

    } catch (error) {
      res.status(400).json({
        success: false,
        data: [],
        message: error.message,
      });
    }
  };
  getDashboard = async (req: any, res: any) => {
    try {
        const Annoucement = await this.getDashboardAnnoucements();
        res.status(200).json({ success: true, cache: false, data: Annoucement });

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
      const { annoucemrntId } = req.params;
      const Annoucement = await this.getAnnoucement(annoucemrntId);
      res.status(200).json({ success: true, data: Annoucement });
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
      if (!req.body.content) {
        res.status(400).json({ message: "Form inputs cannot be empty" });
      }
      const Annoucement = await this.createAnnoucement(req.body);
      res.status(200).json({ success: true, data: Annoucement,message:`Annoucement added!` });
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
      const { annoucementId } = req.params;
      const body = req.body;
      const Annoucement = await this.updateAnnoucement(annoucementId, body);
      res.status(200).json({ success: true, data: Annoucement,message:` Annoucement updated!` });
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
      const { annoucementId } = req.params;
      const advisors = await this.deleteAnnoucement(annoucementId);
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
