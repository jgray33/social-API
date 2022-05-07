const User = require("../models/User")

module.exports= {
    getUsers(req,res) {
        User.find()
        .then((users) => res.json(users))
        .catch((err) => console.log(err))
    },
    // Create a new user
    createUser(req,res) {
        User.create(req.body)
        .then((dbUserData) => res.json(dbUserData))
        .catch((err) => console.log(err))
    },
    // Get a user with ID
    getSingleUser(req,res) {
        User.findOne({_id: req.params.userId})
        .select("-__v")
        .then((user) =>
        !user 
        ? res.status(404).json({message: "No user with this id"})
        :res.json(user)
        )
        .catch((err) => res.status(500).json(err))
    },
    // Update a user based on the id
    updateUser(req,res) {
        User.findOneAndUpdate(
            { _id: req.params.userId},
            { $set: req.body },
            { runValidators: true, new: true}
        )
        .then((user) => 
        !user
        ? res.status(404).json({message: "No user with that ID"})
        :res.json(user)
        )
        .catch((err) => {
            console.log(err)
            res.status(500).json(err)
        })
    },
    // Delete a user and associated thoughts
    deleteUser(req,res) {
        User.findOneAndRemove({_id: req.params.userId})
        .then((user) =>
        !user
        ? res.status(404).json({message: "No user with this id"})
        : Thoughts.deleteMany({_id: {$in: user.thoughts}})
        )
        .then(() => res.json({message: "User and associated thoughts deleted"}))
        .catch((err) => res.status(500).json(err))
    },
    // Add friend to user
    addFriend(req,res) {
        User.findOneAndUpdate(
            {_id: req.params.userId },
            { $addToSet: { friends: req.params.friendId}},
            { runValidators: true, new: true}
        )
        .then ((user) => 
        !user
        ? res.status(404).json({message: "No user with that Id"})
        : res.json(user)
        )
        . catch((err) => res.status(500).json(err))
    }
}