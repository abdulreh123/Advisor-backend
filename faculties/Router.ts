import express = require("express");
import FacultyController from "./controllers";
const router = express.Router();
const facultyController = new FacultyController();
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
  facultyController.findAll
);
router.get(
  "/:departmentId",
  facultyController.findOne
);

router.put(
  "/:departmentId",
  facultyController.update
);
router.post(
  "/create",
  facultyController.create
);

router.delete(
  "/:departmentId",
  facultyController.delete
);

module.exports = router;
