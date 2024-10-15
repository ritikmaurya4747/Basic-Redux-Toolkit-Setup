import React from 'react'
import Child1 from './Componenets/Child1'
import { useSelector } from 'react-redux'

function App() {
  const data = useSelector((state)=>state.show.value)
  return (
    <>
      <p>App - {data} </p>
      <Child1 />
    </>
  )
}

export default App