//filtering data before saving to the data base.

// Import function from User Model
import { getMysteries } from '../model/PrayerQueries.js'

// get mysteries from papal_mysteries
export const mysteries = (req, res) => {
  getMysteries((err, results) => {
    if (err) {
      res.send(err)
    } else {
      res.json(results)
    }
  })
}

// get mysteries from prayer_rosary
export const prayerRosary = (req, res) => {
  getGetPrayerRosary((err, results) => {
    if (err) {
      res.send(err)
    } else {
      res.json(results)
    }
  })
}
