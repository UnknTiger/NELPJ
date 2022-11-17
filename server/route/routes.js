//server routes

// import express
import express from 'express'

// import function from controller
import {
  showUsers,
  userLogin,
  mysteries,
  prayerRosary,
} from '../controller/UserController.js'

// init express router
const router = express.Router()

router.get('/users', showUsers)
// router.post('/VisitorLogin', userLogin)

router.post('/VisitorLogin', userLogin)

// router.get('/prayer', mysteries)
// router.get('/prayer', prayerRosary)

export default router
