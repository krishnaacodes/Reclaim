import asyncHandler from "../utils/asynchandler.js";
import User from "../models/user.model.js";


const registerUser = async (req,res)=>{

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
        message:"user already exists with this username or email"
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
};

const loginUser = asyncHandler(async (req,res)=>{

    const {email,password} = req.body;

    if(!email || !password){
        res.status(400).send("email and password is required");
        return;
    }

    const user = await User.findOne({
        $or:[{email},{username}]
    })

    if(!user){
        res.status(400).send("no user exists with this username or email");
        return;
    };

    const ispasswordcorrect = await user.ispasswordcorrect(password);

    if(!ispasswordcorrect){
        res.status(400).send("password is incorret");
        return;
    }






});


export { registerUser};
 