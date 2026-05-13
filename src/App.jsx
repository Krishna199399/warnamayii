import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Mainroute from './route/Mainroute'

function App() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');

  return (
    <>
      {!isDashboard && <Navbar />}
      <Mainroute />
      {!isDashboard && <Footer />}
    </>
  )
}

export default App
