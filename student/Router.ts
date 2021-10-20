import express = require("express");
import StudentController from "./controllers";
const router = express.Router();
const StudentControllers = new StudentController();
import Middlewares from "../helpers/Middlewares";
//const middleware = new Middlewares();

//router.use(Middlewares.auth);
// const seeDepartment = ["super_admin","can_see_department"];
// const updateDepartment = [
//   "super_admin",
//   "can_manage_organization",
// ];


router.get(
  "/",
  StudentControllers.findAll
);
router.get(
  "/:studentId",
  StudentControllers.findOne
);
router.get(
  "/automate/:studentId",
  StudentControllers.automate
);
router.get(
  "/advisor/:advisorId",
  StudentControllers.findByAdvisor
);
router.get(
  "/transcript/:studentId",
  StudentControllers.studentTranscript
);

router.put(
  "/:studentId",
  StudentControllers.update
);
router.put(
  "/:studentId/:courseId",
  StudentControllers.gradeUpdate
);
router.put(
  "/add/remove/:studentId",
  StudentControllers.courseUpdate
);
router.post(
  "/create",
  StudentControllers.create
);

router.delete(
  "/:studentId",
  StudentControllers.delete
);

module.exports = router;
