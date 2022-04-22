import express = require("express");
import PaymentController from "./controllers";
const router = express.Router();
const PaymentControllers = new PaymentController();
// import Middlewares from "../helpers/Middlewares";
//const middleware = new Middlewares();

//router.use(Middlewares.auth);
// const seeDepartment = ["super_admin","can_see_department"];
// const updateDepartment = [
//   "super_admin",
//   "can_manage_organization",
// ];


router.get(
  "/",
  PaymentControllers.findAll
);
router.get(
  "/:paymentId",
  PaymentControllers.findOne
);
router.get(
  "/student/:studentId",
  PaymentControllers.findByStydent
);

router.put(
  "/:paymentId",
  PaymentControllers.update
);
router.post(
  "/create",
  PaymentControllers.create
);

router.delete(
  "/:paymentId",
  PaymentControllers.delete
);

module.exports = router;
