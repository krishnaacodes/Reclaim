import asyncHandler from "../utils/asynchandler.js";


const authenticateuser = asyncHandler(async (req , res, next)=>{
    
    const accessToken = req.cookies.accessToken;

    console.log("accdes" , accessToken);

    next();

});


export {authenticateuser};