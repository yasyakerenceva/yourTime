const express = require("express");
const { updateUser } = require("../controllers/user");
const authenticated = require("../middlewares/authenticated");
const mapUser = require("../helpers/mapUser")

const router = express.Router({ mergeParams: true });

router.patch("/", authenticated, async (req, res) => {
	const { firstname, login, jobtitle } = req.body;

	const newUser = await updateUser(req.user.id, {
		firstname,
		login,
		jobtitle,
	});

	res.send({ data: mapUser(newUser) });
});

module.exports = router;
