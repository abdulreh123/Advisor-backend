
const Rooms = require("./model");
const Buildings = require('../building/model')
const Group = require('../courseGroup/model')
export default class RoomService {
  constructor() { }
  //  Create Rooms
  createRooms = async (data: any): Promise<any> => {
    try {
      const Room = await Rooms.create({ ...data });
      return Room;
    } catch (error) {
      throw error;
      // throw new Error("An Error occurred while creating department!");
    }
  };
  //  Get Rooms
  getRooms = async (): Promise<any> => {
    try {
      const Room = await Rooms.findAll({
        include: [
          {
            model: Buildings,
            as: "Buildings"
          },
        ]
      });
      return Room;
    } catch (error) {
      throw error;
    }
  };
  //  Get Rooms
  getRoom = async (roomId: number): Promise<any> => {
    try {
      const Room = await Rooms.findByPk(roomId, {
        include: [
         {
            model: Buildings,
            as: "Buildings"
          },
         {
            model: Group,
            as: "Group"
          }
        ]
      });
      return Room;
    } catch (error) {
      throw error;
    }
  };
  //  Update Rooms
  updateRooms = async (
    roomId: number,
    data: any,
  ): Promise<any> => {
    try {
      await Rooms.update(
        { ...data },
        { where: { id: roomId } }
      );
      const department = await this.getRoom(roomId);
      return department;
    } catch (error) {
      throw error;
    }
  };
  //  Delete advisor
  deleteRooms = async (
    roomId: number,
  ): Promise<any> => {
    try {
      const Room = await Rooms.findOne({
        where: {
          id: roomId,
        },
        paranoid: false,
      });
      Room.destroy();
      return { message: "Rooms record deleted!" };
    } catch (error) {
      throw error
    }
  };
}