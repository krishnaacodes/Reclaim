import mongoose, { Mongoose } from "mongoose";


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

        

    },
    location:{
        tyep:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    image:{
        type:String, // cloudnary
        required:true
    },
    user:{
        type:mongoose.Schem.Type.ObjectId,
        ref:"User",
        required:true
    },
},
    {timestamps:true}
)

const lostitem = mongoose.model("lostitem",lostitemSchema);

export default lostitem;
