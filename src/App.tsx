// Made by Poukam Pierre
import Header from './Component/header'
import Footer from './Component/footer'
import Home from './pages/home'
import React from 'react'
import { Buffer } from 'buffer'
global.Buffer = Buffer
function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  )
}

export default App
