import asyncHandler from "../utils/asynchandler.js";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";


const authenticateuser = asyncHandler(async (req , res, next)=>{
    
    try{
        const accessToken = req.cookies.accessToken;
    if(!accessToken){
        res.status(401).send("access token expired");
        return;
    }

    const decodedtoken = await jwt.verify(accessToken,process.env.ACCESS_TOKEN_SECRET);

   const user = await User.findById(decodedtoken._id);

   if(!user){
    res.status(401).send("invalid access token");
    return;
   }

   req.user = user;

    

    next();
} catch(error){
    res.status(500).send("internal server error");
}

});


export {authenticateuser};