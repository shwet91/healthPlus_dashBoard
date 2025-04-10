import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

//routes import
import userRoute from "./routes/user.route.js"
import taskRoute from "./routes/task.route.js"
import grievanceRoute from "./routes/grievances.route.js"
import programRoute from "./routes/Program.route.js"



//routes declaration
app.use("/api/v1/user", userRoute)
app.use("/api/v1/task", taskRoute)
app.use("/api/v1/grievance", grievanceRoute)
app.use("/api/v1/program", programRoute)



// http://localhost:8000/api/v1/

export { app }