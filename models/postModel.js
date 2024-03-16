const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    like: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Like"
    }],
    comment: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }]
}, {
    timestamps: true // Automatically add createdAt and updatedAt fields
});

module.exports = mongoose.model("Post", postSchema);
