import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";



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
    },
    refreshtoken:{
        type:String,
        required:true
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
userschema.methods.generateAccessToken =  function(){

   return jwt.sign({
        _id: this._id,
        username: this.username,
        email: this.email,
        fullname: this.fullname
    },process.env.ACCESS_TOKEN_SECRET,{expiresIn:process.env.ACCESS_TOKEN_EXPIRY});

} 
userschema.methods.generateRefreshToken =  function(){
    
   return jwt.sign({
        _id: this._id,
    },process.env.REFRESH_TOKEN_SECRET,{expiresIn:process.env.REFRESH_TOKEN_EXPIRY});
}

const User = mongoose.model("User",userschema);

export default User;