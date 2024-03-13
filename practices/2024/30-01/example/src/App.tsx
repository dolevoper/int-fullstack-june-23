import { useState } from 'react'
import './App.css'
import CookieTrey from './components/CookieTrey'
import Cookie from './components/Cookie'
import NameChange from './components/NameChange'

function App() {
  const [cookieTreyAmount, setCookieTreyAmount] = useState<number[]>([])
  const [taste, setTaste] = useState("chocolate")

  const handleAddCookieTrey = () => {
    setCookieTreyAmount([...cookieTreyAmount, 1])
  }
  const handleAddCookieTaste = () => {
    if (taste == "chocolate") {
      setTaste("vanilla")
    } else {
      setTaste("chocolate")
    }
  }

  return (
    <>
      {/* <button onClick={handleAddCookieTrey}>Add Cookie trey</button>
      {cookieTreyAmount.length > 0 && cookieTreyAmount.map(() => { return <CookieTrey /> })}
      <CookieTrey />
      <button onClick={handleAddCookieTaste}>CHANGE</button>
      <Cookie num={3}>
       {taste}
      </Cookie> */}
      <NameChange/>
    </>
  )
}

export default App
