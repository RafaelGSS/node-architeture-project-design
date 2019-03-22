import { config } from "dotenv";
import express from "express";
import path from "path";
import registerRoutes from "../config/routes";
import builderResponseMiddleware from "./middlewares";

config();

const app = express();

// Base response middleware
app.use(builderResponseMiddleware);

// Boot routes
registerRoutes(app, path.join(__dirname, "./routes"));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`Server started at http://localhost:${port}`);
});
