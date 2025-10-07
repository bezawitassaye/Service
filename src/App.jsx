import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Aos from 'aos'
import 'aos/dist/aos.css';
import About from './components/About';

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
      <About/>
    </div>
  )
}

export default App
