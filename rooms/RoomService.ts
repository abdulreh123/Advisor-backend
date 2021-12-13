
const Rooms = require("./model");
const Buildings = require('../building/model')
const CourseRooms = require('./courseRooms.model')
const { Op } = require("sequelize");
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
          }
        ]
      });
      return Room;
    } catch (error) {
      throw error;
    }
  };
  //  Get Rooms
  getAvailableRoom = async (day: string, start: Date, end: Date): Promise<any> => {
    try {
      let room:[]
      const Room = await Rooms.findAll({
        include: [
          {
            model: CourseRooms,
            as: "CourseRoom",
            required: false,
            where: {
              [Op.and]: [{ day: day }, { timeStart: { [Op.and]: { [Op.lte]: end, [Op.lte]: start } } }, { timeEnd: { [Op.and]: { [Op.gt]: start, [Op.lte]: end } } }],
            }
          }
        ]
      });
    // const result = await Room.map(async(room:any)=>{
    //   await room.CourseRoom.map((course:any)=>{
    //   let starting = new Date("01/01/2007 " + course.timeStart).getHours();
    //   let ending = new Date("01/01/2007 " + course.timeEnd).getHours();
    //   let startCheck = new Date("01/01/2007 " + start).getHours();
    //   let endCheck = new Date("01/01/2007 " + end).getHours();
    //   if(course.day===day&&starting===startCheck)
    //    console.log('hello')
    //   })
    // })
      const filteredRoom = Room.filter((room: any) => room.CourseRoom.length === 0)
      return filteredRoom;
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
    //  Create group rooms
    createGroupRooms = async (data: any): Promise<any> => {
      try {
        const Room = await CourseRooms.create({ ...data });
        return Room;
      } catch (error) {
        throw error;
        // throw new Error("An Error occurred while creating department!");
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