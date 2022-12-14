//saving data to the database
import db from "../config/database.js";

export const verifyUser = (data, result) => {
	const sql_stmt = "SELECT username as name, role FROM register WHERE username = ? AND password = ?";
	const queryParam = [data.username, data.password, data.role];

	db.query(sql_stmt, queryParam, (err, results) => {
		// console.log(db.query(sql_stmt, queryParam, (err, results) => {}).sql)

		if (err) {
			console.log(err);
			result(err, null);
		} else {
			console.log(results);
			result(null, results);
			// (window.location.href =
			//   '../../client/src/components/members/MemberTemplate.vue')
		}
	});
};

// Get All mysteries from table papal_mysteries
export const getMysteries = (result) => {
	db.query("SELECT * FROM papal_mysteries", (err, results) => {
		if (err) {
			console.log(err);
			result(err, null);
		} else {
			result(null, results);
		}
	});
};

// Get All mysteries from table papal_mysteries
export const getPrayerRosary = (result) => {
	db.query("SELECT * FROM prayer_rosary", (err, results) => {
		if (err) {
			console.log(err);
			result(err, null);
		} else {
			result(null, results);
		}
	});
};

//get all testimonies from table testimonies
export const getTestimony = (result) => {
	db.query("SELECT * FROM testimonies", (err, results) => {
		if (err) {
			console.log(err);
			result(err, null);
		} else {
			result(null, results);
		}
	});
};

//add new testimony to database table
export const insertTestimony = (data, result) => {
	db.query("INSERT INTO testimonies SET ?", [data], (err, results) => {
		if (err) {
			console.log(err);
			result(err, null);
		} else {
			result(null, results);
		}
	});
};

export const insertRegister = (data, result) => {
	db.query("INSERT INTO register SET ?", [data], (err, results) => {
		if (err) {
			console.log(err);
			result(err, null);
		} else {
			result(null, results);
		}
	});
};

export const getRegister = (result) => {
	db.query("SELECT * FROM register", (err, results) => {
		if (err) {
			console.log(err);
			result(err, null);
		} else {
			result(null, results);
		}
	});
};

export const DBgetFndInfo = (result) => {
	db.query("SELECT * FROM fnds_info", (err, results) => {
		if (err) {
			console.log(err);
			result(err, null);
		} else {
			result(null, results);
		}
	});
};
