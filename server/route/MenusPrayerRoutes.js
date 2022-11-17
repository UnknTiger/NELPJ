//server routes

// import express
import express from 'express'

// import function from controller
import { mysteries, prayerRosary } from '../controller/PrayerController.js'

// init express router
const MenusPrayerRoutes = express.Router()

MenusPrayerRoutes.get('/prayer', mysteries)
// MenusPrayerRoutes.get('/prayer', prayerRosary)

export default MenusPrayerRoutes
