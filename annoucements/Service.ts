
const Annoucementmodel = require("./model");
const group = require('../courseGroup/model')
const StudentCourses = require("../student/StudentCourses.model");
const { Op } = require("sequelize");
export default class BuildingService {
  constructor() { }
  //  Create Building
  createAnnoucement = async (data: any): Promise<any> => {
    try {
      const annoucementmodel = await Annoucementmodel.create({ ...data });
      return annoucementmodel;
    } catch (error) {
      throw error;
      // throw new Error("An Error occurred while creating department!");
    }
  };
  //  Get Annoucement
  getAnnoucements = async (): Promise<any> => {
    try {
      const annoucement = await Annoucementmodel.findAll({
        include: [
          {
            model: group,
            as: "Group"
          },
        ]
      });
      return annoucement;
    } catch (error) {
      throw error;
    }
  };
  //  Get Annoucement
  getDashboardAnnoucements = async (): Promise<any> => {
    try {
      const annoucement = await Annoucementmodel.findAll({
        where:{
          groupId:null
        },
      });
      return annoucement;
    } catch (error) {
      throw error;
    }
  };
  //  Get Annoucement
  getStudentAnnoucements = async (studentId:number): Promise<any> => {
    try {
      const groups = await StudentCourses.findAll({
        where:{
          studentId:studentId
        },
      });
      const ids = groups.map((group:any)=>group.courseGroupId)
      const annoucement = await Annoucementmodel.findAll({
        where:{
          groupId:{
            [Op.or]:ids
          }
        },
        include: [
          {
            model: group,
            as: "Group"
          },
        ]
      });
      return annoucement;
    } catch (error) {
      throw error;
    }
  };
  //  Get Annoucement
  getAnnoucement = async (annoucementId: number): Promise<any> => {
    try {
      const annoucement = await Annoucementmodel.findByPk(annoucementId, {
        include: [
         {
            model: group,
            as: "Group"
          },
        ]
      });
      return annoucement;
    } catch (error) {
      throw error;
    }
  };
  //  Get Annoucement by group
  getAnnoucementByGroup = async (groupId: number): Promise<any> => {
    try {
      const annoucement = await Annoucementmodel.findOne( {
        where:{
          groupId:groupId
        },
        include: [
         {
            model: group,
            as: "Group"
          },
        ]
      });
      return annoucement;
    } catch (error) {
      throw error;
    }
  };
  //  Update Annoucement
  updateAnnoucement = async (
    annoucementId: number,
    data: any,
  ): Promise<any> => {
    try {
      await Annoucementmodel.update(
        { ...data },
        { where: { id: annoucementId } }
      );
      const annoucement = await this.getAnnoucement(annoucementId);
      return annoucement;
    } catch (error) {
      throw error;
    }
  };
  //  Delete advisor
  deleteAnnoucement = async (
    annoucementId: number,
  ): Promise<any> => {
    try {
      const annoucement = await Annoucementmodel.findOne({
        where: {
          id: annoucementId,
        },
        paranoid: false,
      });
      annoucement.destroy();
      return { message: "Annoucement record deleted!" };
    } catch (error) {
      throw error
    }
  };
}