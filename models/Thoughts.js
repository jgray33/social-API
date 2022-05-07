const mongoose = require("mongoose");
const moment = require("moment")


const reactionSchema = new mongoose.Schema({
    reactionID: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId
    },
    reactionsBody: {
        type: String, 
        required: true,
        maxlength: 280,
    },
    username: {
        type: String, 
        required: true
    },
    createdAt: {
        type: Date, 
        default: Date.now,
        get: (createdAtVal) => moment(createdAtVal).format("MM-DD-YYY [at] hh:mm a")
    }
})

const thoughtsSchema = new mongoose.Schema({
  thoughtsText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => moment(createdAtVal).format("MM-DD-YYY [at] hh:mm a")
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [reactionSchema],
},
{
  toJSON: {
    getters: true,
  },
},
);

thoughtsSchema.virtual("reactionCount").get(function(){
    return this.reactions.length
})


const Thoughts = mongoose.model("thoughts", thoughtsSchema)

module.exports = Thoughts