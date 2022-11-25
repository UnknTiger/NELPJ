//server routes

// import express
import express from 'express'

// import function from controller
import {
	mysteries,
	userLogin,
	testimony,
	postTestimony,
	postRegister,
} from '../controller/VController.js'

// init express VRoutes
const VRoutes = express.Router()

VRoutes.get('/prayer', mysteries)
VRoutes.post('/UserLogin', userLogin)
VRoutes.post('/testimonials', postTestimony)
VRoutes.get('/testimonials', testimony)
VRoutes.post('/bePartUs', postRegister)
// VRoutes.get('/prayer', prayerRosary)

export default VRoutes
