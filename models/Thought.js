const mongoose = require("mongoose");
let moment = require("moment");

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
        get: dateFormat
    }
})

const thoughtSchema = new mongoose.Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: dateFormat,
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

thoughtSchema.virtual("reactionCount").get(function(){
    return this.reactions.length
})

function dateFormat(dateFormat) {
  return moment(date).format("DD-MM-YYYY");
}

const Thought = mongoose.model("thought", thoughtSchema)

module.exports = Thought