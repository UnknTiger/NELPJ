//saving data to the database
import db from '../config/database.js'

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
