const Students = require("../student/Model");
const Payments = require("./Model");
const { Op,Sequelize } = require("sequelize");
export default class PaymentsService {
  constructor() { }
  //  Create Student
  createPayment = async (data: any): Promise<any> => {
    try {
      const payments = await Payments.create({ ...data });
      return payments;
    } catch (error) {
      throw error;
      // throw new Error("An Error occurred while creating payments!");
    }
  };
  //  Get Student
  getPayments = async (): Promise<any> => {
    try {
      const payments = await Payments.findAll({
        // include: [
        //   {
        //     model: Students,
        //     as: "Student"
        //   },
        // ]
      });
      return payments;
    } catch (error) {
      throw error;
    }
  };
 
  getPayment = async (paymentId: number): Promise<any> => {
    try {
      const result = await Payments.findByPk(paymentId, {
        // include: [
        //   {
        //     model: Students,
        //     as: "Student"
        //   },
        // ]
      });
      return result;
    } catch (error) {
      throw error;
    }
  };
  getPaymentByStudents = async (StudentId: number): Promise<any> => {
    try {
      const result = await Payments.findAll({
        where:{
          StudentId:StudentId
        },
        // include: [
        //   {
        //     model: Student,
        //     as: "Student"
        //   },
        // ]
      });
      return result;
    } catch (error) {
      throw error;
    }
  };
 
  //  Update Student
  updatePayment = async (
    paymentId: number,
    data: any,
  ): Promise<any> => {
    try {
      await Payments.update(
        { ...data },
        { where: { id: paymentId } }
      );
      const payments = await this.getPayment(paymentId);
      return payments;
    } catch (error) {
      throw error;
    }
  };
  
  
  //  Delete Student
  deletePayment = async (
    paymentId: number,
  ): Promise<any> => {
    try {
      const payments = await Payments.findOne({
        where: {
          id: paymentId,
        },
        paranoid: false,
      });
      payments.destroy();
      return { message: "Payments record deleted!" };
    } catch (error) {
      throw error
    }
  };
}
