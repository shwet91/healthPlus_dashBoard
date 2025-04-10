import mongoose, {Schema} from "mongoose";

const mentorSchema = new Schema(
    {// client will tell which clients mentor has.
        client: {
            type: Schema.Types.ObjectId,
             ref: "User"
        },
        // name tells the name of the user which is assigned as mentor
        name : {
            type: Schema.Types.ObjectId,
             ref: "User"
        },
        // Program tells us which program mentor is assigned to
        Program : {
            type: Schema.Types.ObjectId,
             ref: "Program"
        }
    },
    {
        timestamps: true
    }
)


export const Task = mongoose.model("Task", mentorSchema)