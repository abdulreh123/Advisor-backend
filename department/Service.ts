
const Departmentmodel = require("./model");
const Chairman = require("../chairman/model");
const Courses = require("../courses/model");

export default class DepartmentService {
  constructor() {}
  //  Create Department
  createDepartment = async (data: any): Promise<any> => {
    try {
      const department = await Departmentmodel.create({ ...data });
      return department;
    } catch (error) {
      throw error;
      // throw new Error("An Error occurred while creating department!");
    }
  };
  //  Get Departments
  getDepartments = async (): Promise<any> => {
    try {
      const departments = await Departmentmodel.findAll({ 
        include:[
          {
            model:Chairman,
            as: "chairman"
          }
        ]
      });
      return departments;
    } catch (error) {
      throw error;
      throw new Error("An Error occurred while fetching departments!");
    }
  };
  //  Get Department
  getDepartment = async (departmentId: number): Promise<any> => {
    try {
      const result = await Departmentmodel.findByPk(departmentId, {
        include:[
          {
            model:Courses,
            as: "courses"
          }
        ]
      });
      return result;
    } catch (error) {
      throw error;
      throw new Error("An Error occurred while fetching department!");
    }
  };
  //  Update Department
  updateDepartment = async (
    departmentId: number,
    data: any,
  ): Promise<any> => {
    try {
      const department = await this.getDepartment(departmentId);
      await Departmentmodel.update(
        { ...data },
        { where: { id: departmentId } }
      );
      return department;
    } catch (error) {
      throw new Error("An Error occurred while updating departments!");
    }
  };
  //  Delete Department
  deleteDepartment = async (
    departmentId: number,
  ): Promise<any> => {
    try {
      const department = await Departmentmodel.findOne({
        where: {
          id: departmentId,
        },
        paranoid: false,
      });
      department.destroy();
      return { message: "Department record deleted!" };
    } catch (error) {
      throw new Error("An Error occurred while deleting departments!");
    }
  };
}
