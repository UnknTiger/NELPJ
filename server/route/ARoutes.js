// server routes

// import express
import express from "express";

// import function from controller
import {
	postActivity,
	Activity,
	deleteActivity,
	postEvent,
	getEvent,
} from "../controller/AController.js";

// init express router
const ARoutes = express.Router();

ARoutes.post("/admin/activities", postActivity);
ARoutes.get("/admin/activities", Activity);
ARoutes.delete("/admin/activities/:id", deleteActivity);

// ARoutes.get("/admin/members", getMembers);

ARoutes.post("/admin/events", postEvent);
ARoutes.get("/admin/events", getEvent);
export default ARoutes;
