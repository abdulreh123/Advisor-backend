import express = require("express");
import AdvisorController from "./controllers";
const router = express.Router();
const AdvisorControllers = new AdvisorController();
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
  AdvisorControllers.findAll
);
router.get(
  "/:advisorId",
  AdvisorControllers.findOne
);

router.put(
  "/:advisorId",
  AdvisorControllers.update
);
router.get(
  "/time-table/:advisorId",
  AdvisorControllers.timeTable
);
router.post(
  "/create",
  AdvisorControllers.create
);

router.delete(
  "/:advisorId",
  AdvisorControllers.delete
);

module.exports = router;
