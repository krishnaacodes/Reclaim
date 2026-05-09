import express from "express";
import { createLostItem , setAsRecovered ,getAllLostItemOfUser , getAllLostItem , deleteLostItem } from "../controllers/lost.controller.js";
import { authenticateuser} from "../middleware/auth.user.js";

const Router = express.Router();


// Router.post("/createLostItem",authenticateuser,createLostItem);
// Router.post("/setAsRecovered/:id",authenticateuser,setAsRecovered);
// Router.get("/getAllLostItemOfUser",authenticateuser,getAllLostItemOfUser);
// Router.get("/getAllLostItem",authenticateuser,getAllLostItem);
// Router.delete("/deleteLostItem/:id",authenticateuser,deleteLostItem);




Router.post("/createLostItem",createLostItem);
Router.post("/setAsRecovered/:id",setAsRecovered);
Router.get("/getAllLostItemOfUser",getAllLostItemOfUser);
Router.get("/getAllLostItem",getAllLostItem);
Router.delete("/deleteLostItem/:id",deleteLostItem);



export default Router;




