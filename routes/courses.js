const express = require("express");
const router = express.Router();

const courses = [
  { id: 1, name: "English" },
  { id: 2, name: "Tamil" },
  { id: 3, name: "History" }
];

//find all
router.get("/", (req, res) => {
  res.send(courses);
});

//find by id
router.get("/:id", (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  res.send(course);
});

//create course
//post
router.post("/", (req, res) => {
  const course = { id: courses.length + 1, name: req.body.name };
  courses.push(course);

  res.send("successfully saved");
});

//delete couse

router.delete("/:id", (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  const index = courses.indexOf(course);
  courses.splice(index, 1);
  res.send("successfully deleted");
});

//update course
router.put("/:id", (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  course.name = req.body.name;

  res.send("successfully updated");
});

module.exports = router;
