import express = require("express");
import RoomController from "./controller";
const router = express.Router();
const RoomControllers = new RoomController();
//import Middlewares from "../helpers/Middlewares";
//const middleware = new Middlewares();

// router.use(middleware.auth);

router.get(
  "/",
  RoomControllers.findAll
);
router.get(
  "/availability",
  RoomControllers.getAvailable
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
router.post(
  "/create/grouproom",
  RoomControllers.createGroup
);

router.delete(
  "/:roomId",
  RoomControllers.delete
);

module.exports = router;
