import React, { createContext, useState } from 'react'
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import './App.css'
import Allproducts from './Pages/AllProducts/Allproducts'
import Mens from './Pages/Mens/Mens'
import Womens from './Pages/Womens/Womens'
import Image from './assets/shopping.png'
import shirt1 from './assets/shirt1.jpg'
import shirt2 from './assets/shirt2.jpg'
import shirt3 from './assets/shirt3.jpg'
import shirt4 from './assets/shirt4.jpg'
import shirt5 from './assets/shirt5.jpg'
import shirt6 from './assets/shirt6.jpg'
import shirt7 from './assets/shirt7.jpg'
import shirt8 from './assets/shirt8.jpg'
import shirt9 from './assets/shirt9.jpg'
import shirt10 from './assets/shirt10.jpg'
import saree1 from './assets/saree1.jpg'
import saree2 from './assets/saree2.jpg'
import saree3 from './assets/saree3.jpg'
import saree4 from './assets/saree4.jpg'
import saree5 from './assets/saree5.jpg'
import saree6 from './assets/saree6.jpg'
import saree7 from './assets/saree7.jpg'
import saree8 from './assets/saree8.jpg'
import saree9 from './assets/saree9.jpg'
import saree10 from './assets/saree10.jpg'
import shop from './assets/shop.jpg'
import axios from 'axios'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Details from './Components/Details/Details'
import Cart from './Pages/Cart'
const productList=[
  {
    Id:1,
    Category:"Mens",
    Brand:"Majestic Man",
    Description:"Cotton Checkered Slim Fit Casual Shirt For Men",
    Price:999,
    MRP:"1,499",
    Offer:" (67% off)",
    Delivery:"Fri, 23 May",
    Image:shirt1,
    Detail: `This shirt is tailored for men who love simplicity and elegance. Made from breathable cotton, it keeps you comfortable all day at work, casual outings, or family gatherings. The slim-fit cut adds a modern appeal while ensuring ease of movement. Its versatile design pairs well with jeans, chinos, or formal trousers, making it a must-have for every wardrobe. Durable stitching and wrinkle-resistant fabric make it reliable, stylish, and easy to maintain.`
  },

 {
    Id:2,
    Category:"Womens",
    Brand:"Yash Gallery",
    Description:"Banarasi Saree Pure Kanjivaram Silk Saree",
    Price:1999,
    MRP:"4,199",
    Offer:" (80% off)",
    Delivery:"Wed, 28 May",
    Image:saree7,
    Detail: `Yash Gallery presents the elegance of Kanjivaram silk in a Banarasi saree that blends tradition with modern grace. Lightweight yet luxurious, it drapes beautifully, making it perfect for festive occasions, weddings, and cultural celebrations. The rich patterns and vibrant hues reflect timeless craftsmanship. Easy to carry and style, it ensures both comfort and sophistication for long hours of wear.`
  },
  {
    Id:3,
    Category:"Mens",
    Brand:"Dennis Lingo",
    Description:"Men's Checkered Slim Fit Cotton Casual Shirt",
    Price:2550,
    MRP:"2,499",
    Offer:" (78% off)",
    Delivery:"Tue, 27 May",
    Image:shirt2,
    Detail: `Dennis Lingo’s checkered slim-fit cotton shirt combines contemporary style with breathable comfort. Crafted from durable cotton, it ensures a sharp look while remaining versatile enough for casual outings or semi-formal occasions. The slim-fit cut enhances your silhouette without restricting movement. With its trendy checkered design, it easily pairs with jeans, chinos, or even layered under a jacket.`
  },
  {
    Id:4,
    Category:"Womens",
    Brand:"Zeel Clothing",
    Description:"Women's Sequins Thread Embroidered Georgette Semi Stitched Lehenga",
    Price:3399,
    MRP:"9,999",
    Offer:" (66% off)",
    Delivery:"Tue, 27 May",
    Image:saree8,
    Detail: `Zeel Clothing brings a sequins-thread embroidered georgette lehenga designed to sparkle at every celebration. Semi-stitched for the perfect fit, this lehenga is ideal for weddings, festive functions, and parties where elegance matters. The soft georgette fabric adds comfort while keeping the outfit light to carry. Its detailed embroidery and subtle shimmer make you stand out in style.`
  },
  {
    Id:5,
    Category:"Mens",
    Brand:"Allen Solly",
    Description:"Men's 100% Cotton Slim Fit Shirt",
    Price:909,
    MRP:"1,599",
    Offer:" (43% off)",
    Delivery:"Mon, 26 May",
    Image:shirt3,
    Detail: `Allen Solly’s 100% cotton slim-fit shirt offers a refined balance of style and comfort. Designed with clean tailoring and breathable fabric, it transitions smoothly from office wear to casual outings with effortless sophistication. The crisp finish ensures a polished look that lasts throughout the day. A wardrobe essential, it reflects both modern elegance and everyday reliability.`
  },
 {
    Id:6,
    Category:"Womens",
    Brand:"Symbol Premium",
    Description:"Women's 'Desk-to-Dinner' Fit & Flare Wrap Dress (Midi Length | Stylish)",
    Price:1499,
    MRP:"3,599",
    Offer:" (58% off)",
    Delivery:"Mon, 26 May",
    Image:saree5,
    Detail: `From Symbol Premium, this stylish midi-length wrap dress blends elegance with everyday wear. The fit-and-flare design flatters all body types, making it versatile for office meetings and evening dinners. Its breathable fabric ensures all-day comfort, while the wrap style offers ease of adjustment. With a chic and modern look, it’s the ideal outfit for women on the go.`
  },
  {
    Id:7,
    Category:"Mens",
    Brand:"Amazon Brand - Symbol",
    Description:"Amazon Brand - Symbol Men's Cotton Shirt | Chinese Collar | Casual | Plain | Full Sleeve",
    Price:549,
    MRP:"1,499",
    Offer:" (63% off)",
    Delivery:" Wed, 28 May",
    Image:shirt4,
    Detail: `Amazon Brand - Symbol introduces a full-sleeve cotton shirt with a sleek Chinese collar for a modern touch. Lightweight and breathable, it’s designed for men who prefer smart casuals with comfort. The plain pattern adds versatility, making it easy to pair with trousers or jeans. Whether for office, outings, or casual gatherings, it delivers understated elegance.`
  },
   {
    Id:8,
    Category:"Womens",
    Brand:"ZAALIMA FASHION",
    Description:"Women's Embroidered Semi-Stitched Net Lehenga Choli",
    Price:739,
    MRP:"1,599",
    Offer:" (54% off)",
    Delivery:"Fri, 30 May",
    Image:saree9,
    Detail: `ZAALIMA FASHION’s embroidered semi-stitched net lehenga choli is a celebration of elegance. Adorned with fine embroidery, it brings out the perfect festive charm. The semi-stitched design allows a custom fit, ensuring style meets comfort. Ideal for weddings, receptions, or cultural occasions, it blends glamour with grace effortlessly.`
  },
  {
    Id:9,
    Category:"Mens",
    Brand:"Arrow",
    Description:"Men's 100% Cotton Slim Fit Shirt",
    Price:1257,
    MRP:"2,499",
    Offer:" (50% off)",
    Delivery:"Sun, 25 May",
    Image:shirt5,
    Detail: `Arrow’s 100% cotton slim-fit shirt is a timeless classic designed for men who value elegance. Its premium fabric ensures durability while keeping you comfortable throughout the day. Tailored with precision, it’s ideal for both formal events and casual settings. With a sleek finish, it adds sophistication to any wardrobe.`
  },
    {
    Id:10,
    Category:"Womens",
    Brand:"Avantika Fashion",
    Description:"Women's Kanjivaram Soft Semi Silk Banarasi Sarees With Blouse Piece.",
    Price:1099,
    MRP:"3,999",
    Offer:" (62% off)",
    Delivery:"Thu, 29 May",
    Image:saree1,
    Detail: `Avantika Fashion presents a Banarasi semi-silk Kanjivaram saree that celebrates tradition with contemporary appeal. Its soft texture ensures comfort while enhancing the drape beautifully. Designed with intricate patterns, it’s perfect for weddings, festive wear, or cultural gatherings. A timeless piece that combines heritage with modern styling.`
  },
  {
    Id:11,
    Category:"Mens",
    Brand:"Impression Fab",
    Description:"Men's Plain Cotton Casual Shirt for Man Full Sleeve",
    Price:469,
    MRP:"1,499",
    Offer:" (69% off)",
    Delivery:"Mon, 26 May",
    Image:shirt6,
    Detail: `Impression Fab’s plain cotton full-sleeve casual shirt delivers effortless style for everyday wear. Crafted from breathable cotton, it ensures lasting comfort in all seasons. The versatile design makes it easy to pair with jeans, trousers, or shorts. A practical yet stylish option that adds value to your wardrobe essentials.`
  },
  {
    Id:12,
    Category:"Womens",
    Brand:"FIORRA",
    Description:"Women's Maroon Poly Crepe A-Line Kurta Set With Dupatta",
    Price:829,
    MRP:"2,599",
    Offer:" (68% off)",
    Delivery:"Fri, 30 May",
    Image:saree6,
    Detail: `FIORRA offers a maroon poly crepe A-line kurta set with dupatta that radiates charm. Soft and breathable, it’s tailored for women who enjoy comfort without compromising on elegance. The rich maroon shade adds a festive touch, while the set remains practical for family gatherings or celebrations. A stylish choice for versatile occasions.`

  },
  {
    Id:13,
    Category:"Mens",
    Brand:"Boldfit",
    Description:"Gym Regular Fit - Round Neck Active Tshirt for Men Quick Dry",
    Price:430,
    MRP:"999",
    Offer:" (57% off)",
    Delivery:"Sat, 31 May ",
    Image:shirt7,
    Detail: `Boldfit’s gym T-shirt is crafted for men who lead an active lifestyle. With quick-dry technology, it keeps sweat away, ensuring comfort during workouts. The round-neck design adds a classic sporty look, making it wearable beyond the gym. Lightweight and breathable, it’s perfect for training sessions, running, or casual wear.`

  },
   {
    Id:14,
    Category:"Womens",
    Brand:"Madhuram textiles",
    Description:"Women Rayon A-Line Long Kurti(M-2082)",
    Price:945,
    MRP:"3,499",
    Offer:" (73% off)",
    Delivery:"21 - 27 May",
    Image:saree10,
    Detail: `Madhuram Textiles presents a rayon A-line long kurti designed for style and comfort. Its flowing silhouette ensures a flattering fit for casual outings and semi-formal occasions. Crafted from soft rayon fabric, it provides ease of movement while maintaining elegance. A wardrobe staple that combines traditional inspiration with modern flair.`

  },
  {
    Id:15,
    Category:"Mens",
    Brand:"Lymio",
    Description:"Lymio Men Cargo || Men Cargo Pants || Men Cargo Pants Cotton",
    Price:699,
    MRP:"4,999",
    Offer:" (86% off)",
    Delivery:"Fri, 23 May",
    Image:shirt8,
    Detail: `Lymio cargo pants offer the perfect balance of style and practicality. Made from durable cotton, they ensure comfort while featuring multiple utility pockets. Ideal for casual wear, travel, or outdoor activities, they combine ruggedness with modern fashion. A must-have choice for men who prefer function with flair.`

  },
  {
    Id:16,
    Category:"Womens",
    Brand:"MEERA FAB",
    Description:"Women's Cotton Printed Anarkali Kurta with Palazzo & Dupatta Set",
    Price:769,
    MRP:"2,999",
    Offer:" (74% off)",
    Delivery:"23 - 28 May",
    Image:saree4,
    Detail: `MEERA FAB’s cotton printed Anarkali kurta set with palazzo and dupatta brings elegance to festive fashion. Crafted from breathable cotton, it keeps you comfortable while adding grace with vibrant prints. Perfect for celebrations, weddings, or family gatherings, it delivers both tradition and style in one outfit.`

  },
  {
    Id:17,
    Category:"Mens",
    Brand:"AMERICAN CREW",
    Description:"Men's Regular Fit Polos",
    Price:749,
    MRP:"1,499",
    Offer:" (50% off)",
    Delivery:"Mon, 26 May",
    Image:shirt9,
    Detail: `AMERICAN CREW delivers a regular-fit polo designed for men who love timeless casuals. Soft fabric ensures comfort, while the classic cut maintains a sharp look. Perfect for weekend outings, casual dinners, or even layering, it’s a versatile essential. A polo that reflects both comfort and confidence in everyday style.`
  },
  {
    Id:18,
    Category:"Womens",
    Brand:"ANNI DESIGNER",
    Description:"Women's Rayon Blend Solid Straight Kurta with Pant & Dupatta",
    Price:699,
    MRP:"2,599",
    Offer:" (73% off)",
    Delivery:"Sat, 24 May",
    Image:saree3,
    Detail: `ANNI DESIGNER brings a rayon blend straight kurta set with pants and dupatta for a complete ethnic look. Lightweight and elegant, it’s perfect for festivals and casual gatherings alike. The soft fabric ensures comfort for all-day wear. A practical and stylish option that elevates traditional dressing effortlessly.`
  },
  {
    Id:19,
    Category:"Mens",
    Brand:"Leather Retail",
    Description:"Men's Black Solid Jacket",
    Price:2999,
    MRP:"3,999",
    Offer:" (30% off)",
    Delivery:"19 - 31 May",
    Image:shirt10,
    Detail: `Leather Retail’s black solid jacket is built for men who prefer bold and confident fashion. Crafted from premium materials, it provides warmth without compromising on style. Its sleek design makes it suitable for both casual and semi-formal wear. A must-have winter essential that combines durability with trend.`
  },
  {
    Id:20,
    Category:"Womens",
    Brand:"GoSriKi",
    Description:"Women's Rayon Viscose Printed Anarkali Kurta with Palazzo & Dupatta",
    Price:799,
    MRP:"2,599",
    Offer:" (69% off)",
    Delivery:"Fri, 23 May",
    Image:saree2,
    Detail: `GoSriKi’s rayon viscose printed Anarkali kurta set with palazzo and dupatta is designed for elegance. Comfortable yet stylish, it’s versatile enough for festive occasions and daily wear. The breathable fabric ensures ease of movement, while the design highlights traditional charm. A balanced outfit that blends modern comfort with ethnic appeal.`
  },
]
export const ProductContext=createContext()
export const API="http://localhost:5055"

const App = () => {
  const [isSignIn,setIsSignIn]=useState(false)
  const [usersList,setUsersList]=useState(
    {
      name:"",
      email:"",
      password:"",
      mobile:""
    }
  )
  const navigate=useNavigate()
  // Login
  const loginHandler=async()=>{
  if(!usersList.email||!usersList.password)
  {
    alert("Please enter both email & password")
  }
  else{
      try {
    const res=await axios.post(`${API}/login`,{
      email:usersList.email,
      password:usersList.password
    }) 
    localStorage.setItem("token",res.data.token)
    alert("Login Success! Token:" +res.data.token)
    setIsSignIn(true)
    navigate('/AllProducts')
    fetchData()
  } catch (error) {
    alert("Login Failed!")
  }
  }

}
  const fetchData=async()=>{
  try {
    const token= localStorage.getItem("token")
    const res=await axios.get("http://localhost:5055/",{
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
  } catch (error) {
    alert("Failed to fetch")
  }
}
  //Register
  const registerHandler=async()=>{
  if(!usersList.email||!usersList.mobile||!usersList.name||!usersList.password)
  {
    alert("Please Enter all fields")
  }
  else{
      try {
    const res=await axios.post(`${API}/register`,usersList)
    alert("Successfully Registered!")
    navigate('/login')
  } catch (error) {
    alert("Registration Failed")
  }
  }

}

// welcome page
const Home = () => (
  <div className="">
    <div className="post">
          <img src={Image} alt="" className='post-img' />
          <div className="inner-post post-margin">
          <h1 className="big post-margin">Welcome to Shopping Zone</h1>
          <p className="large post-margin">Discover the best of men's and women's fashion, all in one place.
From casual wear to festive collections, we've got something for every occasion</p><br/>
          <Link className="post-btn" to={'/login'}> Start Shopping 🛒</Link>
          </div>  
     </div>
          <div className="footer">
            <p className='des'>At Shopping Zone, we believe shopping should be easy, fun, and stylish. Explore a wide range of fashion, accessories, and more - all in one place.</p>
          </div>
  </div>

)
  return (
      <ProductContext.Provider value={{productList,usersList,setUsersList,loginHandler,registerHandler,isSignIn,setIsSignIn}}>
      <div className="app">
      <Navbar/>
        <Routes>
        {isSignIn ? (
        <>
        <Route path='/AllProducts' element={<Allproducts/>}/>
        <Route path='/Mens' element={<Mens/>}/>
        <Route path='/Womens' element={<Womens/>}/>
        <Route path='/product/:Id' element={<Details/>}/> 
        <Route path='/cart' element={<Cart/>}/>
        </>
        ) : (
        <>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        </>
        )}
        </Routes>
      </div>
      </ProductContext.Provider>

  )
}

export default App