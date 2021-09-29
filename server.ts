import App from "./app";
//const path = require("path");
const Routes = require("./routes/index");
const port: any = 7000;

const resources = [
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
    endpoint: "/api",
    router: (req: any, res: any) => {
      res.status(200).json("Advisor REST API");
    },
  },
];
const app = new App({ port, resources });
app.start();