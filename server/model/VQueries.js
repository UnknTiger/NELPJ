//saving data to the database
import db from '../config/database.js'

export const verifyUser = (data, result) => {
  const sql_stmt =
    'SELECT username as name, role FROM userlogin WHERE username = ? AND password = ?'
  const queryParam = [data.username, data.password, data.role]

  db.query(sql_stmt, queryParam, (err, results) => {
    // console.log(db.query(sql_stmt, queryParam, (err, results) => {}).sql)

    if (err) {
      console.log(err)
      result(err, null)
    } else {
      console.log(results)
      result(null, results)
      // (window.location.href =
      //   '../../client/src/components/members/MemberTemplate.vue')
    }
  })
}

// Get All mysteries from table papal_mysteries
export const getMysteries = (result) => {
  db.query('SELECT * FROM papal_mysteries', (err, results) => {
    if (err) {
      console.log(err)
      result(err, null)
    } else {
      result(null, results)
    }
  })
}

// Get All mysteries from table papal_mysteries
export const getGetPrayerRosary = (result) => {
  db.query('SELECT * FROM prayer_rosary', (err, results) => {
    if (err) {
      console.log(err)
      result(err, null)
    } else {
      result(null, results)
    }
  })
}
