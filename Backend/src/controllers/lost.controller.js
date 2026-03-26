import asyncHandler from "../utils/asynchandler.js";
import LostItem from "../models/lost.model.js";



const createLostItem = asyncHandler(async (req,res)=>{
    const {title,description,category,location,image} = req.body;

    if(!title || !description || !category || !location || !image ){
        res.status(400).send("all fields are required");
        return;
    }

    const createitem = await LostItem.create({
        title,
        description,
        category,
        location,
        image : image || " ",
        status:"lost",
        user : req.user._id
    })

    


    res.status(200).json({
        createitem
    })
});

const setAsRecovered = asyncHandler(async (req,res)=>{
    const id = req.params.id;


    const lostItem = await LostItem.findById(id);
    if(!lostItem){
      res.status(404).send("Item not found");     
      return;
    }
    const userId = req.user._id;
    const lostItemUserID = lostItem.user;

    if(!lostItemUserID.equals(userId)){
         res.status(403).send("You do not have permission to update this item");
         return;
    }



    lostItem.status = "recovered";
    await lostItem.save();


    res.status(200).send("mark as recovered");

})





export {createLostItem,setAsRecovered};





