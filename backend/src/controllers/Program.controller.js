import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import mongoose from "mongoose";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User} from "../models/user.model.js"
import { response } from "express";
import { Grievances } from "../models/Grievances.model.js";
import { Task } from "../models/Task.model.js"
import { Program } from "../models/Program.model.js";
import { Progress } from "../models/Progress.model.js";

const joinProgram = asyncHandler(async(req , res) => {
    const { programAim , programDetails , userId , programName } = req.body 

    console.log(req.body )
  
    if(!programAim || !programDetails || !userId || !programName ){
        throw new ApiError(40 , " please provide programAim , ProgramDetails , userId , ProgramName ")
    }

    const mentor = await User.aggregate([
        {
            $match : { position : "mentor" }
        },
        {
            $project : {
                username : 1,
                email : 1,
                fullname: 1,
                profilePicture  : 1,
                phoneNo : 1,
                programs : 1,
                refreshToken : 1,
                Position : 1,
                ClientCount : { $size: "$programs" } // Count the Programs because each program represent no. 1 client so least no of client means least no of program mentor assigned to

            }
        },
        { $sort: { ClientCount: 1 } }, // Sort in ascending order for client count
        { $limit: 1 } // take first element
    ])

    if(mentor.length === 0){
        throw new ApiError(400 , "failed to find the mentor")
    }

    const program = await Program.create({
       aim : programAim,
       name : programName,
       Details : programDetails,
       client : userId,
       mentor : mentor[0]?._id
    })

    if(!program){
        throw new ApiError(500 , "failed to join program")
    }

    const updateClientProgram = await User.findByIdAndUpdate( userId , {
        $push :{ programs : program._id }
    } , { new : true })

    if(!updateClientProgram){
        throw new ApiError(400 , "failed to update the client")
    }

    return res.status(200).json( new ApiResponse(200 , {program , updateClientProgram } , "Program joined successfully"))
})

const addProgress = asyncHandler(async( req , res) => {

    const  { content , programId } = req.body

    if(!content || !programId){
        throw new ApiError(400 , "please provide content and program id")
    }

    const progress = await Progress.create({
        content , 
        program : programId
    })

    if(!progress){
        throw new ApiError(400 , "failed to add progress")
    }

    return res.status(200).json( new ApiResponse(200 , progress , "progrss added succsessfully"))
})

const getClientPrograms = asyncHandler(async(req , res) => {
     const { userId } = req.params ;

     if(!userId){
        throw new ApiError(400 , "lease provide user Id")
     }

     const getProgram = await Program.find({client : userId})

     if(getProgram.length === 0){
        throw new ApiError(400 , "No Program found")
     }

     return res.status(200).json( new ApiResponse(200 , getProgram , "Fetching programs successfully"))
})

export {
    joinProgram,
    addProgress,
    getClientPrograms
}