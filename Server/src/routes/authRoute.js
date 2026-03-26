import express from 'express';
import { registerUser, loginUser,logoutUser,getUserProfile } from '../controllers/authControllers.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const userRouter = express.Router();


userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/logout",logoutUser);
userRouter.get("/getuser",authMiddleware,getUserProfile);

export default userRouter;