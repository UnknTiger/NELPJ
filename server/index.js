// import express
import express from 'express'
// import cors
import cors from 'cors'
// import body-parser
import bodyParser from 'body-parser'
//import ip
import ip from 'ip'

// import routes
import Router from './route/routes.js'

// -----------custom imports

import VRoutes from './route/VRoutes.js'
import MRoutes from './route/MRoutes.js'
import ARoutes from './route/ARoutes.js'
// -----------custom imports

const port = 5000

// init express
const app = express()
// use express json
app.use(express.json())
// use cors
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// use router
app.use(Router)

// -----------custom use

app.use(VRoutes)
app.use(MRoutes)
app.use(ARoutes)

// -----------custom use

app.listen(port, '0.0.0.0', () =>
  console.log(`Server running at ${ip.address() + ':' + port}`)
)
