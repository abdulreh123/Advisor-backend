import express = require("express");
import ChairmanController from "./controllers";
const router = express.Router();
const ChairmanControllers = new ChairmanController();
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
  ChairmanControllers.findAll
);
router.get(
  "/:chairmanId",
  ChairmanControllers.findOne
);
router.get(
  "/statistics/:departmentId",
  ChairmanControllers.getStat
);

router.put(
  "/:chairmanId",
  ChairmanControllers.update
);
router.post(
  "/create",
  ChairmanControllers.create
);

router.delete(
  "/:chairmanId",
  ChairmanControllers.delete
);

module.exports = router;
