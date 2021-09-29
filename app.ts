import express = require("express");
const cors = require("cors");


const session = require("express-session");
// initalize sequelize with session store
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const dotenv = require("dotenv");
dotenv.config();
const connectDb = require("./helpers/Connection");
// const cronjob = require("./helpers/cronjob");

export default class App {
  public app: express.Application;
  public port: number;

  constructor(appInit: { port: number; resources: any }) {
    this.app = express();
    this.port = appInit.port;
    this.middlewares();
    this.resources(appInit.resources);
    require("./relationships/Relationships");
  }
  //  Add Middlewares
  private middlewares(): void {
    // this.app.use(multer().any());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors()); 
    this.app.use(
      session({
        secret: "sosar",
        resave: false,
        saveUninitialized: false,
        store: new SequelizeStore({
          db: connectDb,
          // expiration: (24*90) * 60 * 60 * 1000 // Expire after 90 days (3 months)
          expiration: (24*90) * 60 * 60 * 1000 , // Expire after 90 days (3 months)
        }),
        name: "sis"
      })
    );
  }

  //  Add all endpoint and router
  private resources(routeControllers: any) {
    routeControllers.forEach((resource: any) => {
      this.app.use(resource.endpoint, resource.router);
    });
  }

  //  Connect database
  private connectDB() {
    connectDb.sync({
      force: false,
    });
  }

  //  Start listening
  private listen() {
    for (let i = this.port; i <= this.port + 0; i++) {
      this.app.listen(i, () => {
        console.log("------------------------------------------------");
        console.log(`Advisor Server successfully running on ${i}`);
        console.log("-------------------------------------------------");
      });
    }
  }

  //  Start server
  public start() {
    this.connectDB();
    this.listen();
  }
}
