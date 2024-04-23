import { useState } from 'react'
import './App.css'
import { Header } from './Header'
import { LoginPage } from './LoginPage'
import { ActivityPage } from './ActivityPage'
import { CreateActivity } from './CreateActivity'
import { ActivityBoard } from './ActivityBoard'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [ setCount ] = useState(0)

  return (
    <>
    <Routes>
      <Route path="/activityBoard" element={<ActivityBoard />} >
      </Route>
    </Routes>
    </>
  )
}

export default App