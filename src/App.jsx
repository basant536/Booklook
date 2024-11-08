import React from 'react'
// import Navbar from './component/Navbar'
// import Banner from './component/Banner'
// import Footer from './component/Footer'
// import Freebook from './component/Freebook'
// import Card from './component/Card'
import Home from './home/Home'
// import Course from './component/Course'
import {Route,Routes} from "react-router-dom"
import Courses from './courses/Courses'
import Signup from './component/Signup'


function App() {
  return (
   <>
   {/* <Navbar/>
   <Banner/>
   <Freebook/>
   <Card/>
   
   <Footer/> */}
   {/* <Home/>
   <Course/> */}
   {/* <div className="dark:bg-slate-900 dark:text-white"> */}
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Course" element={<Courses/>}/>
    <Route path="/Signup" element={<Signup/>}/>
   </Routes>
   {/* </div> */}
   </>
  )
}

export default App
