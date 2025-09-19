import React, { useContext } from 'react'
import { ProductContext } from '../App'

const Register = () => {
     const {usersList,setUsersList,registerHandler}=useContext(ProductContext)
  return (
    <div className='Signup'>
        <div className="signUp">
          <h1>Sign Up</h1>
        <input type="text" placeholder="Enter Name" className='input' onChange={(e)=>setUsersList({...usersList, name:e.target.value})}/>
        <input type="email" placeholder="Enter Email" className='input' onChange={(e)=>setUsersList({...usersList, email:e.target.value})} />
        <input type="password" placeholder="Enter Password"  className='input'  onChange={(e)=>setUsersList({...usersList, password:e.target.value})}/>
        <input type="number" placeholder='Enter Mobile' className='input' onChange={(e)=>setUsersList({...usersList, mobile:e.target.value})}/>
        <button className='input loginbtn mb' onClick={registerHandler}>Register</button>
        </div>
      </div>
  )
}

export default Register