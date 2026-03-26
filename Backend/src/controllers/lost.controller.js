import asyncHandler from "../utils/asynchandler.js";
import LostItem from "../models/lost.model.js";



const createLostItem = asyncHandler(async (req,res)=>{
    const {title,description,category,location,image} = req.body;

    if(!title || !description || !category || !location || !image ){
        res.status(401).send("all fields are required");
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

    const createdLostItem = await LostItem.findById(createitem._id);


    res.status(200).json({
        createdLostItem
    })
})

export {createLostItem};





