import asyncHandler from "../utils/asynchandler.js";
import User from "../models/user.model.js";


const registerUser = async (req,res)=>{

    const {username,email,fullname,avatar,password} = req.body;
    if(!username || !email || !fullname || !password){
        res.status(400).json({
            "message":"all fields are required"
        })
    }

    const userExists = await User.findOne({
        $or : [{email},{username}]
});

   if(userExists){
    res.status(400).send({
        message:"user already exists"
    })
   }

    res.status(200).json({
        "message":"hii",
    })
};


export default registerUser;
 