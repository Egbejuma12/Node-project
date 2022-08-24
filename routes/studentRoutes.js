const express = require("express")
const studentCtrl = require("../controller/studentCtrl")

const router = express.Router()

router.get("/allstudents", studentCtrl.getAllStudents)
router.get("/onestudent", studentCtrl.getOneStudent)
router.post("/poststudent", studentCtrl.postStudent)
router.delete("/onestudent", studentCtrl.deleteStudent)

module.exports = router