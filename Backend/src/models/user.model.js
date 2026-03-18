import mongoose from "mongoose";
import bcrypt from "bcryptjs";



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

userschema.pre("save", async function(next){
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password,10);
    next();
});

userschema.methods.ispasswordcorrect = async function(password){
    return await bcrypt.compare(password,this.password);
}

const User = mongoose.model("User",userschema);

export default User;