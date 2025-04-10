import { Router } from "express";
import { 
    joinProgram,
    addProgress,
    getClientPrograms

} from "../controllers/Program.controller.js"


const router = Router()


router.route("/joinProgram").post( joinProgram)
router.route("/addProgress").post(addProgress)
router.route("/getClientPrograms/:userId").get(getClientPrograms)

export default router