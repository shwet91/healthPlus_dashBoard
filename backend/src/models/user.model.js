import mongoose, {Schema} from "mongoose";

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true, 
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true, 
        },
        fullname: {
            type: String,
            required: true,
            trim: true, 
            index: true
        },
        profilePicture: {
            type: String, // cloudinary url
            required: true,
        },
        phoneNo: {
            type: Number, 
            required: true,
        },
        programs: [
            {
                type: Schema.Types.ObjectId,
                ref: "Program"
            }
        ],
        
        password: {
            type: String,
            required: [true, 'Password is required']
        },
        refreshToken: {
            type: String
        },
        // position tells wheater user is mentor or client;
        position : {
            type: String,
            required: true
        },

    },
    {
        timestamps: true
    }
)





export const User = mongoose.model("User", userSchema)