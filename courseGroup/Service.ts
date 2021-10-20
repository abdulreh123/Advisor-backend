
const Group = require("./model");
const Student = require("../student/Model");
const Advisor = require("../advisor/Model");
const Course = require("../courses/model");

export default class GroupService {
  constructor() { }
  //  Create Group
  createGroup = async (data: any): Promise<any> => {
    try {
      const group = await Group.create({ ...data });
      return group;
    } catch (error) {
      throw error;
      // throw new Error("An Error occurred while creating department!");
    }
  };
  //  Get Group
  getGroups = async (): Promise<any> => {
    try {
      const group = await Group.findAll({
        include: [
          {
            model: Student,
            as: "Students"
          },
          {
            model: Course,
            as: "Course",
          }
        ]
      });
      return group;
    } catch (error) {
      throw error;
    }
  };
  //  Get Group
  getLecturerGroup = async (lecturerId:number): Promise<any> => {
    try {
      const group = await Group.findAll({
        
        where:{
          lecturerId:lecturerId
        },
        include: [
          {
            model: Advisor,
            as: "Advisor",
          },
          {
            model: Student,
            as: "Students"
          },
          {
            model: Course,
            as: "Course",
          }
        ]
      });
      return group;
    } catch (error) {
      throw error;
    }
  };
  //  Get group
  getGroup = async (groupId: number): Promise<any> => {
    try {
      const group = await Group.findByPk(groupId, {
        include: [
          {
            model: Student,
            as: "Students"
          },
          {
            model: Course,
            as: "Course",
          }
        ]
      });
      return group;
    } catch (error) {
      throw error;
    }
  };
  //  Get group
  getDepartmentGroup = async (departmentId: number): Promise<any> => {
    try {
      const group = await Group.findAll({
        include: [
          {
            model: Student,
            as: "Students"
          },
          {
            model: Course,
            as: "Course",
            where:{
              departmentId:departmentId
            }
          }
        ]
      });
      return group;
    } catch (error) {
      throw error;
    }
  };
  //  Update group
  updateGroup = async (
    groupId: number,
    data: any,
  ): Promise<any> => {
    try {
      await Group.update(
        { ...data },
        { where: { id: groupId } }
      );
      const department = await this.getGroup(groupId);
      return department;
    } catch (error) {
      throw error;
    }
  };
  //  Delete advisor
  deleteGroup = async (
    groupId: number,
  ): Promise<any> => {
    try {
      const group = await Group.findOne({
        where: {
          id: groupId,
        },
        paranoid: false,
      });
      group.destroy();
      return { message: "group record deleted!" };
    } catch (error) {
      throw error
    }
  };
}
