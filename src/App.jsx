import { useState, useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css'
import Landing from './pages/Landing'
import Header from './components/Header'
import First from './components/First'
import Employee from './components/Employee'
import Video from './components/Video'
import Experiences from './components/Experiences'
import Clients from './components/Clients'
import Last from './components/Last'
import Footer from './components/Footer'
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div>
        <Header/>
        <First/>
        <Employee/>
        <Video/>
        <Experiences/>
        <Clients/>
        <Last/>
        <Footer/>
      </div>
    </>
  )
}

export default App
