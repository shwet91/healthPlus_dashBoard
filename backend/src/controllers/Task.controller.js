import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import mongoose from "mongoose";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User} from "../models/user.model.js"
import { response } from "express";
import { Grievances } from "../models/Grievances.model.js";
import { Task } from "../models/Task.model.js"


const getTask = asyncHandler(async(req , res) => {
    const {userId} = req.params

    if(!userId){
        throw new ApiError(400 , "Please provide UserId")
    }

    const document = await Task.find({ client : new mongoose.Types.ObjectId(userId) })

    if (document.length === 0) {
        return res.status(202).json(202 , {} , "No Task found for this user")
    }

    return res.status(200).json( new ApiResponse(200 , document , "successfully attained data "))
})

const createTask = asyncHandler(async(req , res) => {
    const {userId , content , mentorId} = req.body

    if(!userId || !content || !mentorId){
        throw new ApiError(400 , "Please provide details")
    }

    const newDocument = await Task.create({
        content,
        status: false,
        client: userId,
        mentor: mentorId
    })

    if (!newDocument) {
        throw new ApiError(500 , "failed to create the Task")
    }

    return res.status(200).json( new ApiResponse(200 , newDocument , "successfully created task "))
})

const toggleTaskComplete = asyncHandler(async(req , res) => {

    const { taskId  } = req.params;

    if(!taskId ){
        throw new ApiError(400 , "Please provide taskId")
    }

    const task = await Task.findByIdAndUpdate( taskId , {
        status: true,
    } , { new : true})

    if(!task){
        throw new ApiError(500 , "failed to update task")
    }

    return res.status(200).json( new ApiResponse(200 , task , "task updated successfully"))

})





export {
    getTask,
    createTask,
    toggleTaskComplete
}