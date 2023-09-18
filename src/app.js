import express from "express";
import morgan from "morgan";
import authroutes from "./routes/auth.routes.js"
import cookieParser from "cookie-parser";


const app = express()


app.use(cookieParser())
app.use(morgan('dev'))
app.use(express.json())

app.use("/api", authroutes )



export default app
