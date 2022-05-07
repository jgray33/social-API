const router = require("express").Router()
const { getUsers, createUser } = require("../../controllers/userControllers")

router.route("/").get(getUsers).post(createUser)

module.exports = router