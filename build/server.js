"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
//const path = require("path");
const Routes = require("./routes/index");
const port = 7001;
const resources = [
    {
        endpoint: "/api/auth",
        router: Routes.authRoutes,
    },
    {
        endpoint: "/api/department",
        router: Routes.departmentRoutes,
    },
    {
        endpoint: "/api/advisor",
        router: Routes.advisorRoutes,
    },
    {
        endpoint: "/api/student",
        router: Routes.studentRoutes,
    },
    {
        endpoint: "/api/course",
        router: Routes.coursesRoutes,
    },
    {
        endpoint: "/api/chairman",
        router: Routes.chairmanRoutes,
    },
    {
        endpoint: "/api/group",
        router: Routes.groupRoutes,
    },
    {
        endpoint: "/api/buildings",
        router: Routes.buildingRoutes,
    },
    {
        endpoint: "/api/rooms",
        router: Routes.roomRoutes,
    },
    {
        endpoint: "/api/payments",
        router: Routes.paymentRoutes,
    },
    {
        endpoint: "/api/announcement",
        router: Routes.annoucementRoutes,
    },
    {
        endpoint: "/api",
        router: (req, res) => {
            res.status(200).json("Advisor REST API");
        },
    },
];
const app = new app_1.default({ port, resources });
app.start();
