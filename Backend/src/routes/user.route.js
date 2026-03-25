import express from "express";
import {registerUser,loginUser,logoutUser} from "../controllers/user.controller.js";
import { authenticateuser } from "../middleware/auth.user.js";

const Router = express.Router();


Router.post('/register',registerUser);
Router.post('/login',loginUser);
Router.post('/logout',authenticateuser,logoutUser);


export default Router;

