
const FacultyModel = require("./model");
const Chairman = require("../chairman/model");
const Courses = require("../courses/model");

export default class FacultyService {
  constructor() {}
  //  Create Faculty
  createFaculty = async (data: any): Promise<any> => {
    try {
      const faculty = await FacultyModel.create({ ...data });
      return faculty;
    } catch (error) {
      throw error;
      // throw new Error("An Error occurred while creating faculty!");
    }
  };
  //  Get Facultys
  getFaculties = async (): Promise<any> => {
    try {
      const faculties = await FacultyModel.findAll({ 
        include:[
          {
            model:Chairman,
            as: "chairman"
          }
        ]
      });
      return faculties;
    } catch (error) {
      throw error;
      throw new Error("An Error occurred while fetching facultys!");
    }
  };
  //  Get Faculty
  getFaculty = async (facultyId: number): Promise<any> => {
    try {
      const result = await FacultyModel.findByPk(facultyId);
      return result;
    } catch (error) {
      throw error;
      throw new Error("An Error occurred while fetching faculty!");
    }
  };
  //  Update Faculty
  updateFaculty = async (
    facultyId: number,
    data: any,
  ): Promise<any> => {
    try {
      const faculty = await this.getFaculty(facultyId);
      await FacultyModel.update(
        { ...data },
        { where: { id: facultyId } }
      );
      return faculty;
    } catch (error) {
      throw new Error("An Error occurred while updating faculties!");
    }
  };
  //  Delete Faculty
  deleteFaculty = async (
    facultyId: number,
  ): Promise<any> => {
    try {
      const faculty = await FacultyModel.findOne({
        where: {
          id: facultyId,
        },
        paranoid: false,
      });
      faculty.destroy();
      return { message: "Faculty record deleted!" };
    } catch (error) {
      throw new Error("An Error occurred while deleting faculties!");
    }
  };
}
