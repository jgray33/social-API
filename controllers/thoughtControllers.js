const Thoughts = require("../models/Thoughts");
const User = require("../models/User")

module.exports = {
  // Get all thoughts
  getThoughts(req, res) {
    Thoughts.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => console.log(err));
  },
  // Create a new thought and add it to a user
  createThought(req, res) {
    Thoughts.create(req.body)
      .then((thought) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $addToSet: { thoughts: thought._id } },
          { new: true }
        );
      })
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({
                message: "Thought created but no user found with that Id",
              })
          : res.json("Thought created")
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  getSingleThought(req,res){
      Thoughts.findOne({_id: req.params.thoughtId})
      .select("-__v")
      .then((thought) =>
      !thought
      ? res.status(404).json({message: "No thoughts with that Id"})
      :res.json(thought)
      )
      .catch((err) => res.status(500).json(err))
  }
};
