import asyncHandler from "../utils/asynchandler.js";
import User from "../models/user.model.js";


const registerUser = asyncHandler(async (req,res)=>{

    const {username,email,fullname,avatar,password} = req.body;
    if(!username || !email || !fullname || !password){
       return res.status(400).json({
            "message":"all fields are required"
        })
    }

    const userExists = await User.findOne({
        $or : [{email},{username}]
});

   if(userExists){
     return  res.status(400).send({
        message:"user already exists"
    })
   }

   const createUser = await User.create({
    username,
    email,
    fullname,
    avatar,
    password,
   });


   const createdUser = await User.findById(createUser._id).select("-password");

  

    res.status(200).json({
        "message":"hii",
        user:createdUser
    })
});


export default registerUser;
 