import express from "express"
import {
  getStudents,
  addStudent,
  deleteStudent
} from "../controllers/studentController.js"

const router = express.Router()

router.route("/").get(getStudents).post(addStudent)

router.route("/:id").delete(deleteStudent)

export default router