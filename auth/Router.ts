import express = require("express");
const router = express.Router();
import authControllers from "./controller";
const AuthController = new authControllers();

//@route POST /api/v2/auth
router.post("/user", AuthController.viaForm);

//@GET /user Get current User
//router.get("/access", AuthController.verifyAccess);
// router.get("/user", AuthController.currentUser);

//  Google login
//router.post("/oauth/google", AuthController.googleLogin);

module.exports = router;
