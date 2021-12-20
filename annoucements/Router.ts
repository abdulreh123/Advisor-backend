import express = require("express");
import annoucementController from "./controllers";
const router = express.Router();
const AnnoucementController = new annoucementController();
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
  AnnoucementController.findAll
);
router.get(
  "/:annoucemrntId",
  AnnoucementController.findOne
);
router.get(
  "/student/:studentId",
  AnnoucementController.studentAnnoucment
);
router.get(
  "/dashboard/announcement",
  AnnoucementController.getDashboard
);

router.put(
  "/:annoucemrntId",
  AnnoucementController.update
);
router.post(
  "/create",
  AnnoucementController.create
);

router.delete(
  "/:annoucemrntId",
  AnnoucementController.delete
);

module.exports = router;
