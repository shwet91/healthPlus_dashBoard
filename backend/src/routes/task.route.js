import { Router } from "express";
import { 
    getTask,
    createTask,
    toggleTaskComplete

} from "../controllers/Task.controller.js"


const router = Router()


router.route("/getTask/:userId").get( getTask)
router.route("/createTask").post(createTask)
router.route("/toggleTaskComplete/:taskId").post(toggleTaskComplete)

export default router