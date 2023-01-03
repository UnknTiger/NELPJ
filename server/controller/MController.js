import { DBgetMemberInfo } from "../model/MQueries.js";

export const getMemberInfo = (req, res) => {
	DBgetMemberInfo((err, results) => {
		if (err) {
			res.send(err);
		} else {
			res.json(results);
		}
	});
};
