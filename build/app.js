"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const session = require("express-session");
// initalize sequelize with session store
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();
const connectDb = require("./helpers/Connection");
// const cronjob = require("./helpers/cronjob");
class App {
    constructor(appInit) {
        this.app = express();
        this.port = appInit.port;
        this.middlewares();
        this.resources(appInit.resources);
        require("./relationships/Relationships");
    }
    //  Add Middlewares
    middlewares() {
        // this.app.use(multer().any());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(cors());
        this.app.use(session({
            secret: "sosar",
            resave: false,
            saveUninitialized: false,
            store: new SequelizeStore({
                db: connectDb,
                expiration: (1) * 60 * 60 * 1000,
            }),
            name: "sis"
        }));
        this.app.use(express.static('frontBuild'));
        this.app.get('/app', (req, res) => {
            res.sendFile(path.resolve(__dirname, 'frontBuild', 'index.html'));
        });
        this.app.use(express.static(path.join(__dirname, "public")));
        this.app.use("/static/assets/uploads", express.static(path.join(__dirname, "payments")));
    }
    //  Add all endpoint and router
    resources(routeControllers) {
        routeControllers.forEach((resource) => {
            this.app.use(resource.endpoint, resource.router);
        });
    }
    //  Connect database
    connectDB() {
        connectDb.sync({
            force: false,
        });
    }
    //  Start listening
    listen() {
        for (let i = this.port; i <= this.port + 0; i++) {
            this.app.listen(i, () => {
                console.log("------------------------------------------------");
                console.log(`Advisor Server successfully running on ${i}`);
                console.log("-------------------------------------------------");
            });
        }
    }
    //  Start server
    start() {
        this.connectDB();
        this.listen();
    }
}
exports.default = App;
