import asyncHandler from "../utils/asynchandler.js";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken"


  const options = {
        httpOnly: true,
        secure: true
    }

const generatetoken = async (user_id) => {
    try{

        const user = await User.findById(user_id);
        if(!user){
            return NULL;
        }
        const accessToken = await user.generateAccessToken();
        const refreshToken = await user.generateRefreshToken();

        return {accessToken,refreshToken};

    }catch(error){
          throw error;
          return ;
    }
}











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

 
    const {accessToken , refreshToken} = await generatetoken(user._id);

     user.refreshtoken = refreshToken;

    await user.save();

   const  loggedUser = await User.findById(user._id).select("-password -refreshtoken");

  

  

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

// logic for logout user
const logoutUser = asyncHandler(async (req,res)=>{
    
    const userinfo = await User.findByIdAndUpdate(
        req.user._id,
        {
            $set:{
            refreshtoken:""
           }
        },
        {returnDocument:"after"});

   


        res.status(200)
        .clearCookie("accessToken")
        .clearCookie("refreshToken")
        .send("user logged out");
     

})


const updateAccessToken = asyncHandler(async (req,res)=>{
    const old_refreshToken = req.cookies.refreshToken;
    if(!old_refreshToken){
        throw "require refresh token";
        return;
    }

   const decoded =  await jwt.verify(old_refreshToken,process.env.REFRESH_TOKEN_SECRET);

   const user = await User.findById(decoded._id);

   if(!user){
    res.status(402).json({message : "Invalid refresh token"});
    return;
   }

   if(old_refreshToken !== user.refreshtoken){
    res.status(402).json({
        "message":"Invalid refresh token"
    })
    return;
   }

   const {accessToken , refreshToken} = await generatetoken(user._id);
   

   user.refreshtoken = refreshToken;
   await user.save();

   res.status(200)
   .cookie("accessToken",accessToken,options)
   .cookie("refreshToken",refreshToken,options)
   .json({
    message:"new token generated",
    accesstoke : accessToken,
    refreshtoken : refreshToken
   })
})



export { registerUser,loginUser,logoutUser,updateAccessToken};
 