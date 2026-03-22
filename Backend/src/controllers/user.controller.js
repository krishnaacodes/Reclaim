import asyncHandler from "../utils/asynchandler.js";


const registerUser = async (req,res)=>{

    const {username,email,fullname,avatar,password} = req.body;
    if(!username || !email || !fullname || !password){
        res.status(400).json({
            "message":"all fields are required"
        })
    }
    
    res.status(200).json({
        "message":"hii",
    })
};


export default registerUser;
 