import express from "express";
import path from "path";
import registerRoutes from "../config/routes";

require("dotenv").config();

const app = express();

// Base response middleware
app.use(require("./middlewares"));

// Boot routes
registerRoutes(app, path.join(__dirname, "./routes"));

app.listen(process.env.PORT || 3000, () => {
    // tslint:disable-next-line:no-console
    console.log(`Server started at http://localhost:${port}`);
});
