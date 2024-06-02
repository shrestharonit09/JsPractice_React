import React from 'react'
<<<<<<< HEAD
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
=======
import Counter from './component/Counter'
import Practice from './component/Practice';
import Try from './component/Try'

const App = () => {
  return (
    <div>
      <Counter title="Data Analysis" />
      <Try ronit ="Hello this is from App.js"/>
      <Practice content="lets try again" />
    </div>
    
  );
>>>>>>> bb0f7da (Js practice)
}

export default App