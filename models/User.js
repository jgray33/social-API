const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true, trim: true },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: "Please fill a valid email address",
    },
  },
  thoughts: [
    {
      type: mongoose.Schema.Types.ObjectId,
        ref: "Thought",
      },
  ],
  friends: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
},
{
    toJSON: {
        virtuals: true,
            }
});

userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = mongoose.model("user", userSchema);



module.exports = User;
