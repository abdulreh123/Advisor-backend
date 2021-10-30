
// const DepartmentService = require("../services/DepartmentService");
import PaymentService from './Service'
const uploadFile = require("../helpers/paymentUploads");
export default class PaymentController extends PaymentService{
  /**
   * @desc  Get all Departments
   * @param req Request
   * @param res Response
   */
  findAll = async (req: any, res: any) => {
    try {
        const advisors = await this.getPayments();
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
      const { paymentId } = req.params;
      const payment = await this.getPayment(paymentId);
      res.status(200).json({ success: true, data: payment });
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
  findByStydent = async (req: any, res: any) => {
    try {
      const { studentId } = req.params;
      const payment = await this.getPaymentByStudents(studentId);
      res.status(200).json({ success: true, data: payment });
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
      await uploadFile(req, res);
      const { document } = req.body;
      const files = req.files;
      const attachments: any = [];
      files.map((file: any) => {
        attachments.push(file.path);
      });
      const bodyData = JSON.parse(document);
      const Payments = await this.createPayment(bodyData);
      res.status(200).json({ success: true, data: Payments,message:` Payment added!` });
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
      const { paymentId } = req.params;
      const body = req.body;
      const Payments = await this.updatePayment(paymentId, body);
      res.status(200).json({ success: true, data: Payments,message:` payment updated!` });
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
      const { paymentId } = req.params;
      const Payments = await this.deletePayment(paymentId);
      res.status(200).json({ success: true, data: Payments });
    } catch (error) {
      res.status(400).json({
        success: false,
        data: [],
        message: error.message,
      });
    }
  };
}
