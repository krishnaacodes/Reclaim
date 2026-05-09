import 'dotenv/config' 
import cors from "cors";



import express from "express";
import cookieParser from "cookie-parser";
import connection from "./config/db.js";

const app = express();

app.use(cors());

app.use(express.json());
app.use(cookieParser());

await connection();


import userRouter from "./routes/user.route.js";
import lostRouter from "./routes/lost.route.js";
import foundRouter from "./routes/found.route.js";

app.use("/api/v1/user",userRouter);
app.use("/api/v1/lost",lostRouter);
app.use("/api/v1/found",foundRouter);




app.listen(process.env.PORT ,()=>{
    console.log("hao");
})
































