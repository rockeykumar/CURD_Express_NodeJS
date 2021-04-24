const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/CollegeDB", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => console.log("connection successfully..."))
.catch((err) => console.log(err));
