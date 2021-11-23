"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
class Middlewares {
}
exports.default = Middlewares;
Middlewares.auth = (req, res, next) => {
    try {
        const token = req.header("sis-auth-token");
        //Check for token
        if (!req.session.isLoggedIn)
            return res.status(401).json({
                success: false,
                message: "No token, authorization denied!!",
            });
        //Verify token
        const decoded = jwt.verify(token, "neuAdvisor");
        //Add user from payload
        req.session.user = decoded;
        next();
    }
    catch (e) {
        res.status(400).json({
            success: false,
            message: "Invalid token, authorization denied!",
        });
    }
};
