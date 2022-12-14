//server routes

// import express
import express from "express";

// import function from controller
import { mysteries, userLogin, testimony, postTestimony, postRegister, Register, prayerRosary, getFndInfo } from "../controller/VController.js";

// init express VRoutes
const VRoutes = express.Router();

VRoutes.get("/prayer", mysteries);
VRoutes.get("/materials", prayerRosary);
VRoutes.post("/UserLogin", userLogin);

VRoutes.post("/testimonials", postTestimony);
VRoutes.get("/testimonials", testimony);

VRoutes.post("/bePartOfUs", postRegister);
VRoutes.get("/bePartOfUs", Register);

VRoutes.get("/aboutUs", getFndInfo);
// VRoutes.get('/prayer', prayerRosary)

export default VRoutes;
