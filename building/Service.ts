
const Building = require("./model");
const Rooms = require('../rooms/model')
export default class BuildingService {
  constructor() { }
  //  Create Building
  createBuilding = async (data: any): Promise<any> => {
    try {
      const building = await Building.create({ ...data });
      return building;
    } catch (error) {
      throw error;
      // throw new Error("An Error occurred while creating department!");
    }
  };
  //  Get Building
  getBuildings = async (): Promise<any> => {
    try {
      const building = await Building.findAll({
        include: [
          {
            model: Rooms,
            as: "Rooms"
          },
        ]
      });
      return building;
    } catch (error) {
      throw error;
    }
  };
  //  Get Building
  getBuilding = async (buildingId: number): Promise<any> => {
    try {
      const building = await Building.findByPk(buildingId, {
        include: [
         {
            model: Rooms,
            as: "Rooms"
          },
        ]
      });
      return building;
    } catch (error) {
      throw error;
    }
  };
  //  Update Building
  updateBuilding = async (
    buildingId: number,
    data: any,
  ): Promise<any> => {
    try {
      await Building.update(
        { ...data },
        { where: { id: buildingId } }
      );
      const department = await this.getBuilding(buildingId);
      return department;
    } catch (error) {
      throw error;
    }
  };
  //  Delete advisor
  deleteBuilding = async (
    buildingId: number,
  ): Promise<any> => {
    try {
      const building = await Building.findOne({
        where: {
          id: buildingId,
        },
        paranoid: false,
      });
      building.destroy();
      return { message: "Building record deleted!" };
    } catch (error) {
      throw error
    }
  };
}