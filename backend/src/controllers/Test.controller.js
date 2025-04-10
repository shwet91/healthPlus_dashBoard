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

const addData = asyncHandler(async( req , res ) => {
    const { data } = req.body;

    if(!data){
        throw new ApiError(400 , "please provide data")
    }

    const addData = await User.insertMany(data)

    if(!addData){
        throw new ApiError(400 , " data entry failed ")
    }

    return res.status(200).json(new ApiResponse(
        200 , addData , "ok"
    )
    )
})

export {
    addData
}