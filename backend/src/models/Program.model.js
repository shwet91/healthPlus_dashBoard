import mongoose, {Schema} from "mongoose";

const programSchema = new Schema(
    {
        name : {
            type: String,
            required: true
        },
        aim: {
            type: String,
            required: true
        },
        Details : {
            type: String,
            required: true
        },
        // clients will tell which client is enrolled in this program
        client: { 
            type: Schema.Types.ObjectId,
             ref: "User"
        },
        // mentor will tell which mentor are assigned to the program
        mentor : {
            type: Schema.Types.ObjectId,
             ref: "Mentor"
        }
    },
    {
        timestamps: true
    }
)


export const Program = mongoose.model("Program", programSchema)