import express from "express";
import { createLostItem } from "../controllers/lost.controller.js";
import { authenticateuser } from "../middleware/auth.user.js";

const Router = express.Router();


Router.post("/createLostItem",authenticateuser,createLostItem);




export default Router;




