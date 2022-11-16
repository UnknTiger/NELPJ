//filtering data before saving to the data base.

// Import function from User Model
import {
  getUsers,
  insertUser,
  verifyUser,
  getMysteries,
} from '../model/User.js'

// Get All Users
export const showUsers = (req, res) => {
  getUsers((err, results) => {
    if (err) {
      res.send(err)
    } else {
      res.json(results)
    }
  })
}

//Insert User
export const createUser = (req, res) => {
  const data = {
    username: username,
    password: 12345678,
    member_id: member_id,
  }
  insertUser(data, (err, results) => {
    if (err) {
      res.send(err)
    } else {
      res.json(results)
    }
  })
}

export const userLogin = (req, res) => {
  const data = {
    username: req.body.username,
    password: req.body.password,
  }

  verifyUser(data, (err, result) => {
    if (err) {
      res.send(err)
    } else {
      res.json(result)
    }
  })
}

//get mysteries from papal_mysteries
export const mysteries = (req, res) => {
  getMysteries((err, results) => {
    if (err) {
      res.send(err)
    } else {
      res.json(results)
    }
  })
}
