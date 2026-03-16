import 'dotenv/config' 



import express from "express";
import connection from "./config/db.js";

const app = express();

await connection();



app.listen(process.env.PORT,()=>{
    console.log("hao");
})
































