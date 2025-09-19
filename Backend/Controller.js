import User from "./Model.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const readData=async(req,res)=>{
     try {
          const read=await User.find()
          return res.status(200).json(read)
     } catch (error) {
          return res.status(401).json({message:"Unable to get data"})     
     }
}
export const newUser=async(req,res)=>{
     try {
          const {name,email,password,mobile}=req.body
          const existUser=await User.findOne({email})
          if(existUser){
               return res.status(409).json({message:"User allready exists"})
          }
          const Salt=await bcrypt.genSalt(10)
          const hashedPassword=await bcrypt.hash(password, Salt)
          const insertNew=await User({name:name,email:email,password:hashedPassword,mobile:mobile}).save()
          return res.status(201).json({message:"User Succesfully inserted",data:insertNew})
     } catch (error) { 
          return res.status(409).json({message:"Register Failed",data:error})
     }
}
export const loginUser = async(req,res)=>{
    try {
        const {email,password} = req.body
        const existed = await User.findOne({email})    
        if(!existed){
            return res.status(404).json({message:"User Not Found"})
        }
        const compare = await bcrypt.compare(password,existed.password)
        if(!compare){
            return res.status(401).json({ message: "Invalid credentials" })
        }
        const token = jwt.sign({email},"vadhanikesava",{expiresIn:'1h'})
        return res.status(200).json({message:"Login Suceess",token:token})
    } catch (error) {
        return res.status(400).json({message:"Login Error",data:error})
    }
}
export const verifyToken = async(req,res,next)=>{
    const auth = req.headers["authorization"]
    if(!auth){
        return res.status(404).json({message:"Enter the Provided token"})
    }
    const token = auth.split(" ")[1]
    try {
        const decode = jwt.verify(token,"vadhanikesava")
        req.user = decode
        next()
    } catch (error) {
        return res.status(414).json({message:"Invalid Token",data:error})
    }
}