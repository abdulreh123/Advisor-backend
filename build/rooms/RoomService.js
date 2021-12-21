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
const moment = require('moment');
const momentRange = require('moment-range');
momentRange.extendMoment(moment);
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
                let availabeliroom = [];
                const Room = yield Rooms.findAll({
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
                availabeliroom = Room;
                const date1 = [moment(`2021-12-06 ${start}`), moment(`2021-12-06 ${end}`)];
                Promise.all(yield Room.map((room) => __awaiter(this, void 0, void 0, function* () {
                    yield room.CourseRoom.map((course) => {
                        const date2 = [moment(`2021-12-06 ${course.timeStart}`), moment(`2021-12-06 ${course.timeEnd}`)];
                        const range = moment.range(date1);
                        const range2 = moment.range(date2);
                        // has overlapping
                        if (range.overlaps(range2)) {
                            if ((range2.contains(range, true) || range.contains(range2, true)) && !date1[0].isSame(date2[0]))
                                availabeliroom = availabeliroom.filter((roo) => roo.id !== room.id);
                            else
                                availabeliroom = availabeliroom.filter((roo) => roo.id !== room.id);
                        }
                    });
                })));
                return availabeliroom;
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
