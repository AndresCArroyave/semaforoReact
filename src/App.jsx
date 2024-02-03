import { useState } from 'react'
import TrafficLight from './components/TrafficLight'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TrafficLight/>
    </>
  )
}

export default App
