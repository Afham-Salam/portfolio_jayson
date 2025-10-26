import { useState } from 'react'

import { Outlet } from 'react-router-dom'

import './App.css'
import ScrollToTop from './hooks/ScrollToTop'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <ScrollToTop />
    <Outlet />
   
   
   </>
)}

export default App
