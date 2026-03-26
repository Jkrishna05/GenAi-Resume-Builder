import jwt from "jsonwebtoken";
import blacklistTokenModel from "../models/blackListToken.js";


export const authMiddleware= async(req,res,next)=>{
    try {
        const token=req.cookies.token;
        if(!token){
            return res.status(401).json({
                success:false,
                message:"Unauthorized: No token provided"
            });
        }
        const blacklistedToken= await blacklistTokenModel.findOne({token});
        if(blacklistedToken){
            return res.status(401).json({
                success:false,
                message:"Unauthorized: Token is blacklisted"
            });
        }
        const decoded= jwt.verify(token,process.env.JWT_SECRET);
        req.user=decoded;
        next();
    } catch (error) {
        console.error("Authentication error:", error);
        res.status(401).json({
            success:false,
            message:"Unauthorized: Invalid token"
        });
        
    }
}