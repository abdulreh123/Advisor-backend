import express = require("express");
import BuildingController from "./controllers";
const router = express.Router();
const BuildingControllers = new BuildingController();
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
  BuildingControllers.findAll
);
router.get(
  "/:buildingId",
  BuildingControllers.findOne
);

router.put(
  "/:buildingId",
  BuildingControllers.update
);
router.post(
  "/create",
  BuildingControllers.create
);

router.delete(
  "/:buildingId",
  BuildingControllers.delete
);

module.exports = router;
