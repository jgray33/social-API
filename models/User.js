const { Schema, Types, ObjectId } = require("mongoose")

const userSchema = new Schema({
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
          type: Schema.Types.ObjectId,
          ref: "Thought"
      }
  }]
});

const User = model("user", userSchema)

module.exports = User