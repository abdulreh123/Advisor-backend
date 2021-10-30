const path = require("path");
const util = require("util");
const multer = require("multer");
//  Maximum upload file size (default is 2MB)
const maxSize = 200 * 1024 * 1024;

let storage = multer.diskStorage({
  destination: (req: any, file: any, cb: any) => {
    cb(
      null,
      path.join(__dirname, "../../") + "/Advisor-backend/public/static/assets/uploads/payments"
    );
  },
  filename: (req: any, file: any, cb: any) => {
    console.log(file)
    const finalFileName = file.originalname;
    cb(null, finalFileName);
  },
});

let uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).any("attachmentFile",12);

let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;