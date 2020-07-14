const next = require('next')
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import compression from "compression";
import session from "express-session";
import lusca from "lusca";
import mongo from "connect-mongo";
import mongoose from "mongoose";
import passport from "passport";
import bluebird from "bluebird";
import errorHandler from "errorhandler";
import { MONGODB_URI, SESSION_SECRET, SERVER_PORT, ORIGIN_URI } from "./util/secrets";
import { CORS_WHITELIST } from "../common/HostUrl";

// Next Js relative stuff
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
    .prepare()
    .then(() => {
        // Connect to MongoDB
        const MongoStore = mongo(session);
        const mongoUrl: string = MONGODB_URI as string;
        (<any>mongoose).Promise = bluebird;
        mongoose.set("useNewUrlParser", true);
        mongoose.set("useFindAndModify", false);
        mongoose.set("useCreateIndex", true);
        mongoose.connect(mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(
            () => {
                console.log("  MongoDB is connected successfully.");
            },
        ).catch((err: any) => {
            console.error("  MongoDB connection error. Please make sure MongoDB is running. " + err);
            process.exit();
        });

        // Express configuration
        const expressApp = express();
        expressApp.set("server_port", SERVER_PORT);
        expressApp.set("origin_uri", ORIGIN_URI);
        expressApp.use(compression());
        expressApp.use(cors({
            origin: (requestOrigin: string | undefined, callback: (err: Error | null, allow?: boolean) => void): void => {
                // allow requests with no origin
                if (requestOrigin && CORS_WHITELIST.indexOf(requestOrigin) === -1) {
                    const message: string = "The CORS policy for this origin doesn't allow access from the particular origin.";
                    return callback(new Error(message), false);
                } else {
                    // tslint:disable-next-line:no-null-keyword
                    return callback(null, true);
                }
            },
            credentials: true
        }));
        expressApp.use(express.json());
        expressApp.use(express.urlencoded({ extended: true }));
        expressApp.use(session({
            resave: true,
            saveUninitialized: true,
            secret: SESSION_SECRET as string,
            store: new MongoStore({
                url: mongoUrl,
                autoReconnect: true
            })
        }));
        expressApp.use(passport.initialize());
        expressApp.use(passport.session());
        expressApp.use(lusca.xframe("SAMEORIGIN"));
        expressApp.use(lusca.xssProtection(true));
        expressApp.use(function (req: Request, res: Response, next: NextFunction) {
            console.log(`[${req.method} ${req.originalUrl}] is called, body is ${JSON.stringify(req.body)}`);
            next();
        });
        expressApp.use((req: Request, res: Response, next: NextFunction) => {
            res.locals.user = req.user;
            next();
        });
        if (process.env.NODE_ENV === "development") {
            expressApp.use(errorHandler());
        }

        // Server rendering configuration
        if (process.env.NODE_ENV === "production") {
            expressApp.use(
                express.static("build", { maxAge: 31557600000 })
            );
        }
        
        expressApp.get('/api/test', (req: Request, res: Response) => {
            return res.json({ name: 'Testing' })
        })
        expressApp.get('*', (req: Request, res: Response) => {
            return handle(req, res)
        })
        expressApp.listen(port, (err: any) => {
            if (err) throw err
            console.log('App ready to serve on port 3000')
        })
    })
    .catch((err: any) => {
        console.error(err.stack)
        process.exit(1)
    })
