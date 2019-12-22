const express = require("express");
const app = express();
const courses = require("./routes/courses");
app.use("/courses", courses);

app.use(express.json());

app.listen(3000, console.log("listening on port 3000"));
