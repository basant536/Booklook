import React from 'react'
import Navbar from '../component/Navbar'
import Banner from '../component/Banner'
import Footer from '../component/Footer'
import Freebook from '../component/Freebook'
import Card from '../component/Card'


function Home() {
  return (
    <>
      <Navbar/>
   <Banner/>
  
    <Freebook/>
    <Card/>
   
   <Footer/>
     </>
  )
}

export default Home

// import React from "react";
// import Navbar from "../components/Navbar";
// import Banner from "../components/Banner";
// import Freebook from "../components/Freebook";
// import Footer from "../components/Footer";

// function Home() {
//   return (
//     <>
//       <Navbar />
//       <Banner />
//       <Freebook />
//       <Footer />
//     </>
//   );
// }

// export default Home;

