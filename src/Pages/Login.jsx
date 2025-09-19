import React, { useContext } from 'react'
import { ProductContext } from '../App'
import { Link } from 'react-router-dom'

const Login = () => {
     const {usersList,setUsersList,loginHandler}=useContext(ProductContext)
  return (
      <div className="Login">
        <div className='signIn'>
          <h1 className=''>Sign In</h1>
              <input type="text" name='email' placeholder='Enter your Email' className='input' value={usersList.email} onChange={(e)=>setUsersList({...usersList, email:e.target.value})}/>
              <input type="password" name="password" placeholder='Enter Your Password' value={usersList.password} id="" className='input' onChange={(e)=>setUsersList({...usersList, password:e.target.value})}/>
              <button className='input loginbtn mb' onClick={loginHandler}>Login</button>
              <p className='mt'>Not a Member? <Link to={'/register'}className='sign_up'>Signup Now</Link></p>
      </div>
      </div>
  )
}

export default Login