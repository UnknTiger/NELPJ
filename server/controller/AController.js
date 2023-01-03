//filtering data before saving to the data base.

// Import function from User Model
import {
	insertActivity,
	getActivity,
	DBdeleteAct,
	insertEvent,
	DBgetEvent,
} from "../model/AQueries.js";

export const postActivity = (req, res) => {
	const data = {
		title: req.body.actTitle,
		description: req.body.actDesc,
		location: req.body.actLocation,
		sched: req.body.actSched,
	};
	insertActivity(data, (err, results) => {
		if (err) {
			res.send(err);
		} else {
			res.json(results);
		}
	});
};

export const Activity = (req, res) => {
	getActivity((err, results) => {
		if (err) {
			res.send(err);
		} else {
			res.json(results);
		}
	});
};

export const deleteActivity = (req, res) => {
	const id = req.params.id;
	DBdeleteAct(id, (err, results) => {
		if (err) {
			res.send(err);
		} else {
			res.send(results);
		}
	});
};

// export const getMembers = (req, res) => {
// 	DBgetMembers((err, results) => {
// 		if (err) {
// 			res.send(err);
// 		} else {
// 			res.json(results);
// 		}
// 	});
// };

export const postEvent = (req, res) => {
	const data = {
		e_name: req.body.eName,
		e_description: req.body.eDesc,
		e_date: req.body.eDate,
		e_location: req.body.eLocation,
		e_image: req.files.eImg,
		e_code: req.body.eCode,
	};
	let image = req.files.eImg;
	console.log(data.e_image);
	image.mv("../uploads/" + image.name);

	insertEvent(data, (err, results) => {
		if (err) {
			res.send(err);
		} else {
			res.json(results);
		}
	});
};

export const getEvent = (req, res) => {
	DBgetEvent((err, results) => {
		if (err) {
			res.send(err);
		} else {
			res.json(results);
		}
	});
};
