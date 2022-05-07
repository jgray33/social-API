const User = require("../models/User")

module.exports= {
    getUsers(req,res) {
        User.find()
        .then((users) => res.json(users))
        .catch((err) => console.log(err))
    },
    createUser(req,res) {
        User.create(req.body)
        .then((dbUserData) => res.json(dbUserData))
        .catch((err) => console.log(err))
    },
    getSingleUser(req,res) {
        User.findOne({_id: req.params.userId})
        .select("-__v")
        .then((user) =>
        !user 
        ? res.status(404).json({message: "No user with this id"})
        :res.json(user)
        )
        .catch((err) => res.status(500).json(err))
    }
}