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



const setAsRecovered = asyncHandler(async (req,res)=>{
    const id = req.params.id;

    if(!id){
        res.staus(400).send("Invalid id");
    }


    const foundItem = await FoundItem.findById(id);

    if(!foundItem){
      res.status(404).send("Item not found");     
      return;
    }
    const userId = req.user?._id;
    const foundItemUserID = foundItem.user;

    if(!foundItemUserID.equals(userId)){
         res.status(200).send("You do not have permission to update this item");
         return;
    }



    foundItem.status = "recovered";
    await foundItem.save();


    res.status(200).json(
        {
            message : "mark as recovered",
            foundItem

    });

});

const getAllFoundItemOfUser = asyncHandler(async (req,res)=>{
    
    
   

    const allFoundItem = await FoundItem.find({user:req.user?._id});

    if (!allFoundItem || allFoundItem.length === 0) {
    res.status(200).send("No Found items found for this user");
    return;
   }

    res.status(200).json({
        allFoundItem
    })
});





export {getAllFoundItem,createFoundItem,setAsRecovered,getAllFoundItemOfUser};



