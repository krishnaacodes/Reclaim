import mongoose from "mongoose";


const founditemSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    verificationQuestion: {
    type: String, // e.g., "The lock screen wallpaper is a picture of a golden retriever"
    required: false
    },
    verificationAnswer : {
        type:String,
        required:false
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
        default:-1
    },
    longitude:{
        type:Number,
        default:-1
    },
    status: {
    type: String,
    enum: ["found", "recovered"],
    default: "found"
   },
    date:{
        type:Date,
        default:Date.now,
       
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

const FoundItem = mongoose.model("FoundItem",founditemSchema);

export default FoundItem;
