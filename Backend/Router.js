import express from 'express'
import { loginUser, newUser, readData,verifyToken } from './Controller.js'

const route=express.Router()
route.get('/',verifyToken,readData)
route.post('/register', newUser)
route.post('/login',loginUser)
export default route