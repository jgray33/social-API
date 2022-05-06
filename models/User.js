const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true, trim: true },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
        validator: function(v) {
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v)
        },
        message: "Please fill a valid email address"
    }
  },
  thoughts: [{
      text: String,
      postedBy: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Thought"
      }
  }]
});

const User = mongoose.model("user", userSchema)

User.create(
    {  
        username: "Julia",
        email: "julia.gray30@gmail.com",
            }
)

module.exports = User