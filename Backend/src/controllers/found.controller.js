import FoundItem from "../models/found.model.js";
import asyncHandler from "../utils/asynchandler.js";



const createFoundItem = asyncHandler(async (req,res)=>{
    const {title,description,category,location,image,verificationQuestion,verificationAnswer} = req.body;

    if(!title || !description || !category || !location || !image){
        res.status(400).send("all fields are required");
        return;
    };

    const createitem = await FoundItem.create({
        title,
        description,
        category,
        location,
        verificationQuestion,
        verificationAnswer,
        image : image || " ",
        status:"found",
        user : req.user._id
    });

    


    res.status(200).json({
        createitem
    });
     
});




const getAllFoundItem = asyncHandler(async (req,res)=>{

    const allItem = await FoundItem.find({status:"found"});


   if(!allItem || allItem.length == 0){
    res.status(200).json({
        message:"no found items are listed yet!"
        }
     )
     return;
   }

   res.status(200).json({
    allItems:allItem
   })

});


export {getAllFoundItem,createFoundItem};



