import { useState } from 'react'
import Mostrarpersonajes from './components/personaje'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
       <Mostrarpersonajes/>
      
   </div>
    </>
  )
}

export default App
