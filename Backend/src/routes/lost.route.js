import express from "express";
import { createLostItem , setAsRecovered ,getAllLostItemOfUser , getAllLostItem , deleteLostItem } from "../controllers/lost.controller.js";
import { authenticateuser} from "../middleware/auth.user.js";

const Router = express.Router();


Router.post("/createLostItem",authenticateuser,createLostItem);
Router.post("/setAsRecovered/:id",authenticateuser,setAsRecovered);
Router.get("/getAllLostItemOfUser",authenticateuser,getAllLostItemOfUser);
Router.get("/getAllLostItem",authenticateuser,getAllLostItem);
Router.delete("/deleteLostItem/:id",authenticateuser,deleteLostItem);




export default Router;




