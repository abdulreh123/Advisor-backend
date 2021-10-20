import express = require("express");
import GroupController from "./controllers";
const router = express.Router();
const GourseControllers = new GroupController();
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
  GourseControllers.findAll
);
router.get(
  "/:groupId",
  GourseControllers.findOne
);
router.get(
  "/department/:departmentId",
  GourseControllers.findByDepartment
);
router.get(
  "/lecturer/:lecturerId",
  GourseControllers.findByLecturer
);

router.put(
  "/:groupId",
  GourseControllers.update
);
router.post(
  "/create",
  GourseControllers.create
);

router.delete(
  "/:groupId",
  GourseControllers.delete
);

module.exports = router;
