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

          <a href='https://www.linkedin.com/in/richard-kurwitz/' class="devicon-linkedin-plain"></a>
          <i className="devicon-twitter-original"></i>
          <p className='twitter-handle'>@RKurwitz</p>
          <i className="devicon-github-original-wordmark"></i>
          <p className='github-handle'>kurwitz3</p>
          <p className="nav">Richard Kurwitz</p>
        </div>
    )
}


export default Navbar