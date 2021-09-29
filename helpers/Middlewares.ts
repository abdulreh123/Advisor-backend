const jwt =require("jsonwebtoken");

export default class Middlewares {
  static auth = (req: any, res: any, next: any): void => {
    try {
      const token: string = req.header("sis-auth-token");
      //Check for token
      if (!req.session.isLoggedIn)
        return res.status(401).json({
          success: false,
          message: "No token, authorization denied!!",
        });
      //Verify token
      const decoded: string | object = jwt.verify(
        token,
        "neuAdvisor"
      );
      //Add user from payload
      req.session.user = decoded;
      next();
    } catch (e) {
      res.status(400).json({
        success: false,
        message: "Invalid token, authorization denied!",
      });
    }
  };
}
