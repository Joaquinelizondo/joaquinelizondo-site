import { useState } from 'react'
import './App.css'
import Header from './Componentes/Header/header'
import Body from './Componentes/Body/body'
import Footer from './Componentes/Footer/footer'
import Foot from './Componentes/Foot/foot'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Header />
      <Body />
      <Footer />
      <Foot />

    </div>
    </>
  )
}

export default App
