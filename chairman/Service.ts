
const chairman = require("./model");
const department = require("../department/model");

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
