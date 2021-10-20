import App from "./app";
//const path = require("path");
const Routes = require("./routes/index");
const port: any = 7000;

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
    endpoint: "/api",
    router: (req: any, res: any) => {
      res.status(200).json("Advisor REST API");
    },
  },
];
const app = new App({ port, resources });
app.start();