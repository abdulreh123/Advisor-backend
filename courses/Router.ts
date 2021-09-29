import express = require("express");
import CourseController from "./controllers";
const router = express.Router();
const CourseControllers = new CourseController();
//import Middlewares from "../helpers/Middlewares";
//const middleware = new Middlewares();

// router.use(middleware.auth);
// const seeDepartment = ["super_admin","can_see_department"];
// const updateDepartment = [
//   "super_admin",
//   "can_manage_organization",
// ];
const destroyDepartment = ["super_admin"];

router.get(
  "/",
  CourseControllers.findAll
);
router.get(
  "/:courseId",
  CourseControllers.findOne
);

router.put(
  "/:courseId",
  CourseControllers.update
);
router.post(
  "/create",
  CourseControllers.create
);

router.delete(
  "/:courseId",
  CourseControllers.delete
);

module.exports = router;
