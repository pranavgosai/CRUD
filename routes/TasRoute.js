const express = require("express");

const {getTasks,saveTask,updateTask,deleteTask,} = require("../controllers/TaskControllers")
const router = express.Router();

router.get("/get",getTasks)

router.post("/save",saveTask);

router.put("/update/:id",updateTask);

router.delete("/delete/:id", deleteTask);

module.exports = router;
