import express = require("express");
import DepartmentsController from "./controllers";
const router = express.Router();
const DepartmentController = new DepartmentsController();
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
  DepartmentController.findAll
);
router.get(
  "/:departmentId",
  DepartmentController.findOne
);

router.put(
  "/:departmentId",
  DepartmentController.update
);
router.post(
  "/create",
  DepartmentController.create
);

router.delete(
  "/:departmentId",
  DepartmentController.delete
);

module.exports = router;
