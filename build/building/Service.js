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
const Building = require("./model");
const Rooms = require('../rooms/model');
class BuildingService {
    constructor() {
        //  Create Building
        this.createBuilding = (data) => __awaiter(this, void 0, void 0, function* () {
            try {
                const building = yield Building.create(Object.assign({}, data));
                return building;
            }
            catch (error) {
                throw error;
                // throw new Error("An Error occurred while creating department!");
            }
        });
        //  Get Building
        this.getBuildings = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const building = yield Building.findAll({
                    include: [
                        {
                            model: Rooms,
                            as: "Rooms"
                        },
                    ]
                });
                return building;
            }
            catch (error) {
                throw error;
            }
        });
        //  Get Building
        this.getBuilding = (buildingId) => __awaiter(this, void 0, void 0, function* () {
            try {
                const building = yield Building.findByPk(buildingId, {
                    include: [
                        {
                            model: Rooms,
                            as: "Rooms"
                        },
                    ]
                });
                return building;
            }
            catch (error) {
                throw error;
            }
        });
        //  Update Building
        this.updateBuilding = (buildingId, data) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield Building.update(Object.assign({}, data), { where: { id: buildingId } });
                const department = yield this.getBuilding(buildingId);
                return department;
            }
            catch (error) {
                throw error;
            }
        });
        //  Delete advisor
        this.deleteBuilding = (buildingId) => __awaiter(this, void 0, void 0, function* () {
            try {
                const building = yield Building.findOne({
                    where: {
                        id: buildingId,
                    },
                    paranoid: false,
                });
                building.destroy();
                return { message: "Building record deleted!" };
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.default = BuildingService;
