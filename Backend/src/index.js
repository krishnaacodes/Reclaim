import 'dotenv/config' 



import express from "express";
import cookieParser from "cookie-parser";
import connection from "./config/db.js";

const app = express();

app.use(express.json());
app.use(cookieParser());

await connection();


import userRouter from "./routes/user.route.js";
import lostRouter from "./routes/lost.route.js";

app.use("/api/v1/user",userRouter);
app.use("/api/v1/lost",lostRouter);




app.listen(process.env.PORT ,()=>{
    console.log("hao");
})
































