"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
const controller_1 = __importDefault(require("./controller"));
const AuthController = new controller_1.default();
//@route POST /api/v2/auth
router.post("/user", AuthController.viaForm);
router.get("/access", AuthController.currentUser);
//@GET /user Get current User
//router.get("/access", AuthController.verifyAccess);
// router.get("/user", AuthController.currentUser);
//  Google login
//router.post("/oauth/google", AuthController.googleLogin);
module.exports = router;
