const mongoose = require("mongoose");

const User = mongoose.model("Users", {
    username: String,
    email: String,
    password: String,
    fullname: String,
    bio: String,
    profile_picture: String,
    followers: Array,
    following: Array,
    posts: Array,
    saved_posts: Array,
});

module.exports = User;
