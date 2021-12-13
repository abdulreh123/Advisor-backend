
const Rooms = require("./model");
const Buildings = require('../building/model')
const CourseRooms = require('./courseRooms.model')
const moment = require('moment')
const momentRange = require('moment-range');
momentRange.extendMoment(moment);
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
      let availabeliroom:any=[]
      const Room = await Rooms.findAll({
        include: [
          {
            model: CourseRooms,
            as: "CourseRoom",
            required: false,
            where: {
               day: day 
            }
          }
        ]
      });
    availabeliroom = Room
    const date1 = [moment(`2021-12-06 ${start}`), moment(`2021-12-06 ${end}`)];
    Promise.all(await Room.map(async(room:any)=>{
    await room.CourseRoom.map((course:any)=>{
    const date2 = [moment(`2021-12-06 ${course.timeStart}`), moment(`2021-12-06 ${course.timeEnd}`)];
    const range  = moment.range(date1);
    const range2 = moment.range(date2);
    // has overlapping
    if(range.overlaps(range2)) {
        if((range2.contains(range, true) || range.contains(range2, true)) && !date1[0].isSame(date2[0]))
        availabeliroom = availabeliroom.filter((roo:any)=> roo.id!==room.id)
      else
      availabeliroom = availabeliroom.filter((roo:any)=> roo.id!==room.id)
    }
      })
    }))
      return availabeliroom;
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