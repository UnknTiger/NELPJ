//filtering data before saving to the data base.

// Import function from User Model
import { getMysteries, verifyUser, getPrayerRosary, insertTestimony, getTestimony, insertRegister, getRegister, DBgetFndInfo } from "../model/VQueries.js";

export const userLogin = (req, res) => {
	const data = {
		username: req.body.username,
		password: req.body.password,
	};

	verifyUser(data, (err, result) => {
		if (err) {
			res.send(err);
		} else {
			res.json(result);
		}
	});
};

// get mysteries from papal_mysteries
export const mysteries = (req, res) => {
	getMysteries((err, results) => {
		if (err) {
			res.send(err);
		} else {
			res.json(results);
		}
	});
};

// get mysteries from prayer_rosary
export const prayerRosary = (req, res) => {
	getPrayerRosary((err, results) => {
		if (err) {
			res.send(err);
		} else {
			res.json(results);
		}
	});
};

export const testimony = (req, res) => {
	getTestimony((err, results) => {
		if (err) {
			res.send(err);
		} else {
			res.json(results);
		}
	});
};

export const postTestimony = (req, res) => {
	const data = {
		name: req.body.name,
		msg: req.body.msg,
	};
	insertTestimony(data, (err, results) => {
		if (err) {
			res.send(err);
		} else {
			res.json(results);
		}
	});
};

export const postRegister = (req, res) => {
	const data = {
		lname: req.body.lname,
		fname: req.body.fname,
		mi: req.body.mi,
		address: req.body.address,
		gender: req.body.gender,
		age: req.body.age,
		birthday: req.body.bday,
		contact: req.body.contact,
		email: req.body.fname,
		consecration: req.body.consecration,
		job: req.body.job,
		job_position: req.body.jobPosition,
		job_address: req.body.jobAddress,
		affiliates: req.body.org,
		username: req.body.username,
		password: req.body.password,
	};
	insertRegister(data, (err, results) => {
		if (err) {
			res.send(err);
		} else {
			res.json(results);
		}
	});
};

export const Register = (req, res) => {
	getRegister((err, results) => {
		if (err) {
			res.send(err);
		} else {
			res.json(results);
		}
	});
};

export const getFndInfo = (req, res) => {
	DBgetFndInfo((err, results) => {
		if (err) {
			res.send(err);
		} else {
			res.json(results);
		}
	});
};
