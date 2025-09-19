import mongoose from "mongoose"

const database=(URI)=>{
     try {
          mongoose.connect(URI)
          const db=mongoose.connection
          db.once("open", ()=>{
          console.log("Your DB is now connected");     
     })
     } catch (error) {
          console.log("Unable to connect DB")    
     }

}
export default database