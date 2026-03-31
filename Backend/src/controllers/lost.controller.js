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

    if(!id){
        res.staus(400).send("Invalid id");
    }


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

});


const getAllLostItemOfUser = asyncHandler(async (req,res)=>{
    
    
   

    const allLostItem = await LostItem.find({user:req.user?._id,});

    if (!allLostItem || allLostItem.length === 0) {
    res.status(404).send("No Lost items found for this user");
    return;
   }

    res.status(200).json({
        allLostItem
    })
});

const getAllLostItem = asyncHandler(async (req,res)=>{

    const alllostitem = await LostItem.find({status:"lost"});

    if(!alllostitem || alllostitem.length == 0){
        res.status(200).send("no lost item is present");
        return;
    }

    res.status(200).json({
        alllostitem
    });
});


const deleteLostItem = asyncHandler(async (req,res)=>{

    const id = req.params.id;
    if(!id){
        res.status(401).send("can not fetch id");
        return;
    }

    const item = await LostItem.findById(id);
    if(!item){
        res.status(401).send("no item exists with this id");
        return;
    }

    if(!item.user.equals(req.user?._id)){
      res.status(401).send("you do not have permission to delete this item");
      return;
    }

    await LostItem.findByIdAndDelete(id);

    res.status(200).send("Item deleted successfully");

});







export {createLostItem,setAsRecovered,getAllLostItemOfUser,getAllLostItem,deleteLostItem};





