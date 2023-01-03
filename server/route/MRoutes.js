//server routes

// import express
import express from "express";

// import function from controller
import { getMemberInfo } from "../controller/MController.js";

// init express router
const MRoutes = express.Router();

MRoutes.get("/member", getMemberInfo);
// router.post('/VisitorLogin', userLogin)

// router.post('/VisitorLogin', userLogin)

// router.get('/prayer', mysteries)
// router.get('/prayer', prayerRosary)

export default MRoutes;
