import express from "express";
import { createLostItem , setAsRecovered  } from "../controllers/lost.controller.js";
import { authenticateuser} from "../middleware/auth.user.js";

const Router = express.Router();


Router.post("/createLostItem",authenticateuser,createLostItem);
Router.post("/setAsRecovered/:id",authenticateuser,setAsRecovered);




export default Router;




