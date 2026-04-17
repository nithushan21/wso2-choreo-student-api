const express = require("express");
const router = express.Router();

let students = require("../data/students");

// GET all students
router.get("/", (req, res) => {
    res.json(students);
});

// POST add student
router.post("/", (req, res) => {
    const newStudent = {
        id: students.length + 1,
        name: req.body.name
    };

    students.push(newStudent);
    res.status(201).json(newStudent);
});

// DELETE student
router.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);

    students = students.filter(student => student.id !== id);

    res.json({ message: "Student deleted" });
});

module.exports = router;