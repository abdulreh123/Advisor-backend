"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Rooms = require("./model");
const Buildings = require('../building/model');
const CourseRooms = require('./courseRooms.model');
const { Op } = require("sequelize");
class RoomService {
    constructor() {
        //  Create Rooms
        this.createRooms = (data) => __awaiter(this, void 0, void 0, function* () {
            try {
                const Room = yield Rooms.create(Object.assign({}, data));
                return Room;
            }
            catch (error) {
                throw error;
                // throw new Error("An Error occurred while creating department!");
            }
        });
        //  Get Rooms
        this.getRooms = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const Room = yield Rooms.findAll({
                    include: [
                        {
                            model: Buildings,
                            as: "Buildings"
                        },
                    ]
                });
                return Room;
            }
            catch (error) {
                throw error;
            }
        });
        //  Get Rooms
        this.getRoom = (roomId) => __awaiter(this, void 0, void 0, function* () {
            try {
                const Room = yield Rooms.findByPk(roomId, {
                    include: [
                        {
                            model: Buildings,
                            as: "Buildings"
                        }
                    ]
                });
                return Room;
            }
            catch (error) {
                throw error;
            }
        });
        //  Get Rooms
        this.getAvailableRoom = (day, start, end) => __awaiter(this, void 0, void 0, function* () {
            try {
                let room;
                const Room = yield Rooms.findAll({
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
                const filteredRoom = Room.filter((room) => room.CourseRoom.length === 0);
                return filteredRoom;
            }
            catch (error) {
                throw error;
            }
        });
        //  Update Rooms
        this.updateRooms = (roomId, data) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield Rooms.update(Object.assign({}, data), { where: { id: roomId } });
                const department = yield this.getRoom(roomId);
                return department;
            }
            catch (error) {
                throw error;
            }
        });
        //  Create group rooms
        this.createGroupRooms = (data) => __awaiter(this, void 0, void 0, function* () {
            try {
                const Room = yield CourseRooms.create(Object.assign({}, data));
                return Room;
            }
            catch (error) {
                throw error;
                // throw new Error("An Error occurred while creating department!");
            }
        });
        //  Delete advisor
        this.deleteRooms = (roomId) => __awaiter(this, void 0, void 0, function* () {
            try {
                const Room = yield Rooms.findOne({
                    where: {
                        id: roomId,
                    },
                    paranoid: false,
                });
                Room.destroy();
                return { message: "Rooms record deleted!" };
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.default = RoomService;
