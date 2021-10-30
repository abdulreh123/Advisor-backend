import express = require("express");
import RoomController from "./controller";
const router = express.Router();
const RoomControllers = new RoomController();
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
  RoomControllers.findAll
);
router.get(
  "/:roomId",
  RoomControllers.findOne
);

router.put(
  "/:roomId",
  RoomControllers.update
);
router.post(
  "/create",
  RoomControllers.create
);

router.delete(
  "/:roomId",
  RoomControllers.delete
);

module.exports = router;