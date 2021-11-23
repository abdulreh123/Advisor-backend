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
const Group = require('../courseGroup/model');
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
                        },
                        {
                            model: Group,
                            as: "Group"
                        }
                    ]
                });
                return Room;
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
