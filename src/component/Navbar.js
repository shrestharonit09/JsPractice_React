import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (

        <div className='flex gap-5 border shadow-lg py-5'>

          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
          <Link to= "/">Home</Link>

        </div>

  )
}

export default Navbar