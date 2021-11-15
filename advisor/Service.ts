
const Advisormodel = require("../advisor/model");
const Department = require("../department/model");
const Student = require("../student/model");
const Group = require("../courseGroup/model");

export default class DepartmentService {
  constructor() { }
  //  Create Advisor
  createAdvisor = async (data: any): Promise<any> => {
    try {
      const department = await Advisormodel.create({ ...data });
      return department;
    } catch (error) {
      throw error;
      // throw new Error("An Error occurred while creating department!");
    }
  };
  //  Get Advisor
  getAdvisors = async (): Promise<any> => {
    try {
      const departments = await Advisormodel.findAll({
        include:[
          {model:Department,
          as:"Department"}
        ]
      });
      return departments;
    } catch (error) {
      throw error;
    }
  };
  //  Get Advisor
  getAdvisor = async (advisorId: number): Promise<any> => {
    try {
      const result = await Advisormodel.findByPk(advisorId, {
        include: [
          {
            model: Student,
            as: "Students"
          },
          {
            model: Group,
            as: "Group"
          }
        ]
      });
      return result;
    } catch (error) {
      throw error;
    }
  };
  //  Update Department
  updateAdvisor = async (
    advisorId: number,
    data: any,
  ): Promise<any> => {
    try {
      await Advisormodel.update(
        { ...data },
        { where: { id: advisorId } }
      );
      const department = await this.getAdvisor(advisorId);
      return department;
    } catch (error) {
      throw error;
    }
  };
  
  //  Delete advisor
  deleteAdvisor = async (
    advisorId: number,
  ): Promise<any> => {
    try {
      const department = await Advisormodel.findOne({
        where: {
          id: advisorId,
        },
        paranoid: false,
      });
      department.destroy();
      return { message: "Advisor record deleted!" };
    } catch (error) {
      throw error
    }
  };
}
