import express from "express"
import { getGoals, setGoal, deleteGoal } from "../controllers/goalController.js"

const router = express.Router()

router.route("/").get(getGoals).post(setGoal)
router.route("/:id").delete(deleteGoal)

export default router