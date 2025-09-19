import express from 'express'
import database from './Database.js'
import route from './Router.js'
import cors from 'cors'

const app=express()
const port=5055
app.use(express.json())
database("mongodb://127.0.0.1:27017/userDetails")
app.use(cors({
     origin:'http://localhost:5173',
     methods:['GET','POST','PUT','DELETE'],
     allowedHeaders:['Content-Type','Authorization']
}))
app.use(route)
app.listen(port,()=>{
     console.log(`Server is working under http://localhost:${port}`);
})