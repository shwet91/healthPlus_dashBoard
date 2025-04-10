import mongoose, {Schema} from "mongoose";

const progressSchema = new Schema(
    {
        content : {
            type: String,
            required: true
        },
        program: {
            type: Schema.Types.ObjectId,
             ref: "Program"
        }
    },
    {
        timestamps: true
    }
)


export const Progress = mongoose.model("Progress", progressSchema)