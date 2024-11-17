const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth");

const app = express();
const port = 5000;

// mongoDB
require("./utils/db");
const User = require("./model/user");

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);

// app.get("/", (req, res) => {
//     res.json("Hello Ig Clone");
// });

// app.get("/login", (req, res) => {
//     res.json("Login Page");
// });

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
