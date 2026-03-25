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



 // logic for login user


const loginUser = asyncHandler(async (req,res)=>{

    console.log("req" , req);
    
    const {email,password} = req.body;
   

    if(!email || !password){
        res.status(400).send("email and password is required");
        return;
    }

    const user = await User.findOne({
        $or:[{email}]
    })

    if(!user){
        res.status(400).send("no user exists with this username or email");
        return;
    };

    const ispasswordcorrect = await user.ispasswordcorrect(password);

    if(!ispasswordcorrect){
        res.status(401).send("password is incorret");
        return;
    };

    const accessToken = await user.generateAccessToken();
    const refreshToken = await user.generateRefreshToken();

     user.refreshtoken = refreshToken;

    await user.save();

   const  loggedUser = await User.findById(user._id).select("-password -refreshtoken");

  

    const options = {
        httpOnly: true,
        secure: true
    }

    res.status(200)
    .cookie("accessToken",accessToken,options)
    .cookie("refreshToken",refreshToken,options)
    .json({
        message:"logged in",
        "user": loggedUser,
        "refrestToken":refreshToken,
        "accessToken":accessToken
    })
});


const logoutUser = asyncHandler(async(req,res)=>{
    
    const userinfo = await User.findByIdAndUpdate(
        req.user._id,
        {
            $set:{
            refreshtoken:""
           }
        },
        {returnDocument:"after"});

        const options = {
            secure:true,
            httpOnly:true
        };


        res.status(200)
        .clearCookie("accessToken")
        .clearCookie("refreshToken")
        .send("user logged out");
     

})



export { registerUser,loginUser,logoutUser};
 