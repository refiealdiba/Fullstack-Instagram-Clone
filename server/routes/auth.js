const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../model/user");

const router = express.Router();

router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    if (user.password !== password) {
        return res.status(401).json({ message: "Invalid password" });
    }
    const token = jwt.sign({ id: user._id, username: user.username }, "secret");
    res.json({ token });
});

module.exports = router;
