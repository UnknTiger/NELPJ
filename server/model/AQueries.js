//saving data to the database
import db from "../config/database.js";

export const insertActivity = (data, result) => {
	db.query("INSERT INTO activities SET ?", [data], (err, results) => {
		if (err) {
			console.log(err);
			result(err, null);
		} else {
			result(null, results);
		}
	});
};

export const getActivity = (result) => {
	db.query("SELECT * FROM activities", (err, results) => {
		if (err) {
			console.log(err);
			result(err, null);
		} else {
			result(null, results);
		}
	});
};

export const DBdeleteAct = (id, result) => {
	db.query("DELETE FROM activities WHERE id=?", [id], (err, results) => {
		if (err) {
			console.log(err);
			result(err, null);
		} else {
			result(null, results);
		}
	});
};

// export const DBgetMembers = (result) => {
// 	db.query("SELECT * FROM register", (err, results) => {
// 		if (err) {
// 			console.log(err);
// 			result(err, null);
// 		} else {
// 			result(null, results);
// 		}
// 	});
// };

export const insertEvent = (data, result) => {
	db.query("INSERT INTO events SET ?", [data], (err, results) => {
		if (err) {
			console.log(err);
			result(err, null);
		} else {
			result(null, results);
		}
	});
};

export const DBgetEvent = (result) => {
	db.query("SELECT * FROM events", (err, results) => {
		if (err) {
			console.log(err);
			result(err, null);
		} else {
			result(null, results);
		}
	});
};
