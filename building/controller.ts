import authService from "./service";
const AuthService = new authService();

export default class authControllers {
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
  viaForm = async (req: any, res: any) => {
    try {
      const authenticate = await AuthService.loginViaForm(req.body);
     req.session.isLoggedIn = authenticate ? true : false; // Set Logged in session to true
      req.session.user = authenticate?.user;
      res.status(200).json({ success: true, data: authenticate });
    } catch (error) {
      res.status(400).json({
        success: false,
        data: [],
        message: error.message || "An error occured! Authentication failed",
      });
    }
  };

  /**
   * get currently logged in user
   */
  currentUser = async (req: any, res: any) => {
    try {
      const userId = req.session?.user?.userName;
      if (!userId) throw new Error("Please login");
      const user = await AuthService.verifyUser(userId);
      console.log(user)
      res.status(200).json({ success: true, data: user });
    } catch (error) {
      res.status(400).json({
        success: false,
        data: [],
        message: error.message,
      });
    }
  };
}
