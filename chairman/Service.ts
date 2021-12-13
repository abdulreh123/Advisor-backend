
const chairman = require("./model");
const department = require("../department/model");
const { Op, Sequelize } = require("sequelize");
const Courses = require("../courses/model");
const Student = require("../student/Model");
const Advisor = require("../advisor/model");

export default class ChairmanService {
  constructor() { }
  //  Create Chairmans
  createChairmans = async (data: any): Promise<any> => {
    try {
      const Chairman = await chairman.create({ ...data });
      return Chairman;
    } catch (error) {
      throw error;
      // throw new Error("An Error occurred while creating department!");
    }
  };
  //  Get Chairmans
  getChairmans = async (): Promise<any> => {
    try {
      const Chairman = await chairman.findAll({});
      return Chairman;
    } catch (error) {
      throw error;
    }
  };
  //  Get Chairman
  getChairman = async (ChairmanId: number): Promise<any> => {
    try {
      const Chairman = await chairman.findByPk(ChairmanId, {
        include: [
          {
            model: department,
            as: "Department"
          }
        ]
      });
      return Chairman;
    } catch (error) {
      throw error;
    }
  };
  //  Update Chairman
  updateChairman = async (
    ChairmanId: number,
    data: any,
  ): Promise<any> => {
    try {
      await chairman.update(
        { ...data },
        { where: { id: ChairmanId } }
      );
      const department = await this.getChairman(ChairmanId);
      return department;
    } catch (error) {
      throw error;
    }
  };    
  getChairmansStat = async (departmentId:number): Promise<any> => {
    try {
const courses = await Courses.findAll({
  where:{
    departmentId:  {
      [Op.or]: [departmentId, 4]
    }
  }})
const student = await Student.findAll({
  include: [
    {
      model: Advisor,
      as: "advisor",
      include: [
        {
          model: department,
          as: "Department",
          where:{
            id:departmentId
          }
        },
    ]
    },
]
  })
const advisors = await Advisor.findAll({
      include: [
        {
          model: department,
          as: "Department",
          where:{
            id:departmentId
          }
        },
]
  })
  const totalcredit = await courses.map((item: any) => parseInt(item.credit)).reduce((prev: number, next: number) => prev + next);
  const allStudents = await student.filter((item: any) => item.advisor!==null);
  const data = {
    courses: courses.length,
    students: allStudents.length,
    advisors: advisors.length,
    totalCredits: totalcredit
  }
  return data
    } catch (error) {
      throw error;
    }
  };
  //  Delete advisor
  deleteChairman = async (
    ChairmanId: number,
  ): Promise<any> => {
    try {
      const Chairman = await chairman.findOne({
        where: {
          id: ChairmanId,
        },
        paranoid: false,
      });
      Chairman.destroy();
      return { message: "Chairman record deleted!" };
    } catch (error) {
      throw error
    }
  };
}
