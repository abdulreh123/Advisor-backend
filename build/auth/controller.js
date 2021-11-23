"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = __importDefault(require("./service"));
const AuthService = new service_1.default();
class authControllers {
    constructor() {
        //   /**
        //    * @description Verify if the user email have access , if yes, authenticate and login
        //    * @param req Request
        //    * @param res Response
        //    */
        //   verifyAccess = async (req: any, res: any) => {
        //     try {
        //       const employeeID = req.session.user?.employeeID;
        //       if (!employeeID) throw new Error("Please login");
        //       const result = await AuthService.verifyUser(employeeID);
        //       res.status(200).json({ success: true, data: result });
        //     } catch (error) {
        //       res.status(401).json({
        //         success: false,
        //         data: [],
        //         message: error.message || "An error occurred! Authentication failed",
        //       });
        //     }
        //   };
        /**
         * @description Authenticate employee via form input
         * @param req Request
         * @param res Response
         */
        this.viaForm = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const authenticate = yield AuthService.loginViaForm(req.body);
                req.session.isLoggedIn = authenticate ? true : false; // Set Logged in session to true
                req.session.user = authenticate === null || authenticate === void 0 ? void 0 : authenticate.user;
                res.status(200).json({ success: true, data: authenticate });
            }
            catch (error) {
                res.status(400).json({
                    success: false,
                    data: [],
                    message: error.message || "An error occured! Authentication failed",
                });
            }
        });
        /**
         * get currently logged in user
         */
        this.currentUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            try {
                const userId = (_b = (_a = req.session) === null || _a === void 0 ? void 0 : _a.user) === null || _b === void 0 ? void 0 : _b.username;
                if (!userId)
                    throw new Error("Please login");
                const user = yield AuthService.verifyUser(userId);
                res.status(200).json({ success: true, data: user });
            }
            catch (error) {
                res.status(400).json({
                    success: false,
                    data: [],
                    message: error.message,
                });
            }
        });
    }
}
exports.default = authControllers;
