import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Aos from 'aos'
import 'aos/dist/aos.css';

const App = () => {
  useEffect(()=>{
    Aos.init({
      duration:1000,
      easing:"ease-in-out",
      once:false,
      offset:100
    })
  },[])
  return (
    <div>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default App
