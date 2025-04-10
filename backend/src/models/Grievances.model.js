import mongoose, {Schema} from "mongoose";

const grievancesSchema = new Schema(
    {
        complaint : {
            type: String,
            required: true
        },
        solution : {
            type: String,
        },
        status : {
            type: Boolean,
            required: true
        },
        owner: {
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


export const Grievances = mongoose.model("Grievances", grievancesSchema)