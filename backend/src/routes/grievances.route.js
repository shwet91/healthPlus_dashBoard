import { Router } from "express";
import { 
    createGrievance,
    getGrievances,
    updateSolutionToGrievance

} from "../controllers/Grievances.controller.js"


const router = Router()


router.route("/createGrievance").post( createGrievance)
router.route("/getGrievances/:userId").get(getGrievances)
router.route("/updateSolutionToGrievance").post(updateSolutionToGrievance)

export default router