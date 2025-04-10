import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import mongoose from "mongoose";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User} from "../models/user.model.js"
import { response } from "express";
import { Grievances } from "../models/Grievances.model.js";


const getGrievances = asyncHandler(async(req , res) => {
    const {userId} = req.params

    if(!userId){
        throw new ApiError(400 , "Please provide UserId")
    }

    const document = await Grievances.find({ owner : new mongoose.Types.ObjectId(userId) })

    if (document.length === 0) {
        return res.status(202).json(202 , {} , "No Grievances found for this user")
    }

    return res.status(200).json( new ApiResponse(200 , document , "successfully attained data "))
})

const createGrievance = asyncHandler(async(req , res) => {
    const {userId , complaint , mentorId} = req.body

    if(!userId || !complaint || !mentorId){
        throw new ApiError(400 , "Please provide userId , complaint , mentorId")
    }

    const newDocument = await Grievances.create({
        complaint,
        solution : "",
        status: false,
        owner: userId,
        mentor: mentorId
    })

    if (!newDocument) {
        throw new ApiError(500 , "failed to create the grievance")
    }

    return res.status(200).json( new ApiResponse(200 , newDocument , "successfully attained data "))
})

const updateSolutionToGrievance = asyncHandler(async(req , res) => {

    const { GrievanceId , solution } = req.body;

    if(!GrievanceId || !solution){
        throw new ApiError(400 , "Please provide solution and GrievanceId")
    }

    const grievance = await Grievances.findByIdAndUpdate( GrievanceId , {
        solution,
        status: true
    } , { new : true})

    if(!grievance){
        throw new ApiError(500 , "failed to update Grievance")
    }

    return res.status(200).json(new ApiResponse(200 , grievance , "grievance updated successfully"))

})





export {
    createGrievance,
    getGrievances,
    updateSolutionToGrievance
}