import mongoose from "mongoose";


const lostitemSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true,
        enum: ["electronics", "stationary", "shoe_clothing", "others"] 
    },
    location:{
        type:String,
        required:true
    },
    latitude:{
        type:Number,
        required:false,
        default:-1
    },
    longitude:{
        type:Number,
        required:false,
        default:-1
    },
    
    date:{
        type:Date,
        default:Date.now,
        required:true
    },
    image:{
        type:String, // cloudnary
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
},
    {timestamps:true}
)

const lostItem = mongoose.model("lostItem",lostitemSchema);

export default lostItem;
