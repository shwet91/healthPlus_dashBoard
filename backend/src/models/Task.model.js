import mongoose, {Schema} from "mongoose";

const taskSchema = new Schema(
    {
        content : {
            type: String,
            required: true
        },
        status : {
            type: Boolean,
            required: true
        },
        client: {
            type: Schema.Types.ObjectId,
             ref: "User"
        },
        mentor : {
            type: Schema.Types.ObjectId,
             ref: "Mentor"
        }
    },
    {
        timestamps: true
    }
)


export const Task = mongoose.model("Task", taskSchema)