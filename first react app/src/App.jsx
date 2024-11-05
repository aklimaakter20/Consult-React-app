import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Btn from './components/btn'
import Consult from './components/Consult'
import ConsultReusable from './components/ConsultReusable'
import Offer from './components/Offer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Navbar/>
   <Hero/>
   <Consult /> 
    <Offer />
    </>
  )
}

export default App
