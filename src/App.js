import React from 'react'
import Login from './component/Login'
import Signup from './component/Signup'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './component/Home'


const App = () => {
  return (
    
    <Router>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        </Routes>
    </Router>
  )
}

export default App