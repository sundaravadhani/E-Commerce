import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'
import { ProductContext } from '../../App'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const { isSignIn, setIsSignIn, setUsersList } = useContext(ProductContext)
  const navigate = useNavigate()
  const {items}=useSelector((x)=>x.cart)
  const itemsCount=items.length
  const handleLogout = () => {
    setIsSignIn(false)
    navigate('/')
  }

  return (      
      <div>
        {isSignIn ? (
          <div className='Navbar'>
            <Link to='/AllProducts' className='head'>Shopping Zone</Link>
            <div className="link">
              <Link to='/Mens' className='links'>Mens</Link>
              <Link to='/Womens' className='links'>Womens</Link>
              <Link to='/cart' className='links relative'>🛒 <span className='sup'>{itemsCount}</span></Link>
              <button className="links" onClick={handleLogout}>Sign Out</button>
            </div>
          </div>
        ) : (
            <div className="Navbar">
            <Link to='/' className='head'>Shopping Zone</Link>
            <div className="link">
              <Link to='/login' className='links'>Sign In</Link>
              <Link to='/register' className='links'>Sign Up</Link>
            </div>
            </div>
        )}
      </div>
  )
}
export default Navbar