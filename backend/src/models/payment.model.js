import mongoose, {Schema} from "mongoose";

const paymentSchema = new Schema(
    {
        amount : {
            type: Number,
            required: true
        },
        status : {
            type: Boolean,
            required: true
        },
        owner: {
            type: Schema.Types.ObjectId,
             ref: "User"
        },
        Program : {
             type: Schema.Types.ObjectId,
             ref: "Program"
        },
        mode: {
            type: String,
        }
    },
    {
        timestamps: true
    }
)


export const Payment = mongoose.model("Payment", paymentSchema)