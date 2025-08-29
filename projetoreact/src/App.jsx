import { useState } from 'react'
import './App.css'
import Profile from "./components/profile"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <Profile />
      
    </div>
   
  )
}

export default App
