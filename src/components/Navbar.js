import React from 'react'

import {NavLink} from 'react-router-dom';


const Navbar = () => {
    return (
        <div className='navbar'>
          <NavLink
           to='/'
           exact
           className='navLink'
           >Home</NavLink>

          <NavLink
           to='/Portfolio'
           exact
           className='navLink'
          >Portfolio</NavLink>

          <NavLink
           to='/Resume'
           exact
           className='navLink'
          >Resume</NavLink>
          
          <NavLink
           to='/About'
           exact
           className='navLink'
          >About</NavLink>
          <p className="nav">Richard Kurwitz</p>
        </div>
    )
}


export default Navbar