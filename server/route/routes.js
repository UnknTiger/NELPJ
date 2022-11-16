//server routes

// import express
import express from 'express'

// import function from controller
import {
  showUsers,
  userLogin,
  mysteries,
} from '../controller/UserController.js'

// init express router
const router = express.Router()

router.get('/users', showUsers)
// router.post('/VisitorLogin', userLogin)

router.post('/VisitorLogin', userLogin)

router.get('/prayer', mysteries)

// router.post('/status', (req, res) => {
//   var username = req.body.username
//   var password = req.body.password
//   res.send(`${username} . ${password}`)
// })

export default router
