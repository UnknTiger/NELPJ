import db from "../config/database.js";

export const DBgetMemberInfo = (result) => {
	db.query("SELECT * FROM register", (err, results) => {
		if (err) {
			console.log(err);
			result(err, null);
		} else {
			result(null, results);
		}
	});
};
