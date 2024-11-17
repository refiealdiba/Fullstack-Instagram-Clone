const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/instagram", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
