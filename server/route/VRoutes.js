//server routes

// import express
import express from 'express'

// import function from controller
import { mysteries, userLogin } from '../controller/VController.js'

// init express VRoutes
const VRoutes = express.Router()

VRoutes.get('/prayer', mysteries)
VRoutes.post('/VisitorLogin', userLogin)
// VRoutes.get('/prayer', prayerRosary)

export default VRoutes
