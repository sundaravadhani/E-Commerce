import mongoose from "mongoose";

const newModel=new mongoose.Schema({
          name:String,
          password:String,
          email:String,
          mobile:Number,
          address:String
})
const User=mongoose.model("Users",newModel,"usersDetail")
export default User