import express from "express";
import { authenticateuser } from "../middleware/auth.user.js";
import {getAllFoundItem,createFoundItem,setAsRecovered,getAllFoundItemOfUser} from "../controllers/found.controller.js";

const Router = express.Router();



// Router.get("/getAllFoundItem",authenticateuser,getAllFoundItem);
// Router.post("/createFoundItem",authenticateuser,createFoundItem);
// Router.get("/getAllFoundItemOfUser",authenticateuser,getAllFoundItemOfUser)
// Router.post("/setAsRecovered/:id",authenticateuser,setAsRecovered);


Router.get("/getAllFoundItem",getAllFoundItem);
Router.post("/createFoundItem",createFoundItem);
Router.get("/getAllFoundItemOfUser",getAllFoundItemOfUser)
Router.post("/setAsRecovered/:id",setAsRecovered);

export default Router;