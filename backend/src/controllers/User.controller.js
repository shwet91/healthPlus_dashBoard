import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import { User} from "../models/user.model.js"
import { response } from "express";
import {Payment} from "../models/payment.model.js"
import { Program } from "../models/Program.model.js";
import { mongo } from "mongoose";
import mongoose from "mongoose";


const getUserDetails = asyncHandler(async(req , res) => {
const {userId} = req.params

if(!userId){
    throw new ApiError(400 , "Please provide UserId")
}

const user = await User.findById(userId)

if(!user){
    throw new ApiError(400 , "User does not exist")
}

return res.status(200).json( new ApiResponse(200 , user , "user fetch successful"))
})


const getUserPaymentHistory = asyncHandler( async(req , res) => {
    const {userId} = req.params

if(!userId){
    throw new ApiError(400 , "Please provide UserId")
}

const payment = await Payment.find({
    owner : userId
})

if(payment.length === 0){
    throw new ApiError(400 , "no payment history")
}

return res.status(200).json( new ApiResponse(200 , payment , "payment history fetch successfuly"))
})

const getListOfClients = asyncHandler(async(req , res) => {
    const { mentorID } = req.params

    if(!mentorID){
        throw new ApiError(400 , "Please provide mentorId")
    }

    const clients = await Program.find({ mentor : new mongoose.Types.ObjectId(mentorID)})

    if(clients.length === 0){
        throw new ApiResponse(500 , "No Clients found")
    }

    return res.status(200).json( new ApiResponse(200 , clients , "no of clients fetch successful"))
})



export {
    getUserDetails,
    getUserPaymentHistory,
    getListOfClients
 
}