// import express
import express from "express";
// import cors
import cors from "cors";
// import body-parser
import bodyParser from "body-parser";
//import ip
import ip from "ip";
// import routes
import Router from "./route/routes.js";

// -----------custom imports
import fileUpload from "express-fileupload";
import morgan from "morgan";
import _ from "lodash";
// import multer from "multer";
// import path from "path";

import VRoutes from "./route/VRoutes.js";
import MRoutes from "./route/MRoutes.js";
import ARoutes from "./route/ARoutes.js";

const port = 5000;

// init express
const app = express();

// enable files upload
app.use(
	fileUpload({
		createParentPath: true,
	})
);

// use express json
app.use(express.json());
// use cors
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// use router
app.use(Router);

// -----------custom use
app.use(morgan("dev"));
// app.use(upload());
app.use(VRoutes);
app.use(MRoutes);
app.use(ARoutes);
// app.use(multer());
// app.use(path);
// -----------custom use

app.listen(port, "0.0.0.0", () => console.log(`Server running at ${ip.address() + ":" + port}`));
