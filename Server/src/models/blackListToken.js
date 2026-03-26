import mongoose from "mongoose";

const blackListTokenSchema = new mongoose.Schema({
    token:{
        type:String,
        required:true,
    }
},{timestamps:true});

const blacklistTokenModel= mongoose.model("BlackListToken",blackListTokenSchema);

export default blacklistTokenModel;
