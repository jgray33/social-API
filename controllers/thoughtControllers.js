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
  },
//   Update thought based on id
updateThought(req,res) {
    Thoughts.findOneAndUpdate(
        {_id: req.params.thoughtId},
        { $set: req.body},
        { runValidators: true, new: true}
    )
    .then((thought) => 
    !thought
    ? res.status(404).json({message: "No thought with that Id"})
    : res.json(thought))
    .catch((err) => {
        console.log(err)
        res.status(500).json(err)
    })
},
// Delete thought
deleteThought(req,res) {
    Thoughts.findOneAndDelete({_id: req.params.thoughtId})
    .then(() => res.json({message: "Thought deleted"}))
    .catch((err) => res.status(500).json(err))
},
addReaction(req,res) {
    Thoughts.findOneAndUpdate(
        { _id: req.params.thoughtId},
        { $addToSet: { reactions: req.body}},
        { runValidators: true, new: true}
    )
    .then((thought)=>
    !thought
    ? res.status(404).json({message: "No thought with that Id"})
    :res.json(thought)
    )
    .catch((err) => res.status(500).json(err))
},
deleteReaction(req, res) {
    Thoughts.findOneAndUpdate(
        { _id: req.params.thoughtId},
        {$pull: { reactions: { reactionId: req.body.reactionId} }},
        { runValidators: true, new: true}
    )
    .then((thought) =>
    !thought
    ? res.status(404).json({message: "No thought with this Id"})
    : res.json(thought))
    .catch((err) => res.status(500).json(err))
},
}