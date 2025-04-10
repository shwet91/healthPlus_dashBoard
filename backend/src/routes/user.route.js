import { Router } from "express";
import { 
    getUserDetails,
    getUserPaymentHistory,
    getListOfClients
 
} from "../controllers/User.controller.js";
import { addData } from "../controllers/Test.controller.js";


const router = Router()


router.route("/getUserDetails/:userId").get( getUserDetails)
router.route("/getUserPaymentHistory/:userId").post(getUserPaymentHistory)
router.route("/getListOfClients/:mentorId").get(getListOfClients)
router.route("/sample").post(addData)

export default router