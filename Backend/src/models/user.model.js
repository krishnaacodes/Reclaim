import mongoose from "mongoose";



const userschema = new  mongoose.Schema({

    username : {
        type: String,
        required: true,
        unique : true,
        index: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    fullname:{
        type: String,
        required:true,
    },
    avatar:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:[true,"passwrod is required"]
    }
})

const User = mongoose.model("User",userschema);

export default User;