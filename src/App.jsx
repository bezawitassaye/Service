import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Aos from 'aos'
import 'aos/dist/aos.css';
import About from './components/About';
import SimpleSolutions from './components/SimpleSolutions';
import Agency from './components/Agency';

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
      <SimpleSolutions/>
      <Agency/>
    </div>
  )
}

export default App
