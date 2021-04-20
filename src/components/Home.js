import React from 'react'
import Pic from './IMG_0769.jpeg'

const Home = () =>{
    return (
        <div>
          <p id="welcome">Hello! I'm</p>
          <h1 id="name">Richard Kurwitz</h1>
          <p id="title"> A Full Stack Web Developer</p>
          <button id="btn">Resume</button>
          <i class="devicon-redux-original"></i>
          <i class="devicon-react-original"></i>
          <i class="devicon-rails-plain-wordmark"></i>
          <i class="devicon-javascript-plain"></i>
          <i class="devicon-html5-plain-wordmark"></i>
          <i class="devicon-css3-plain-wordmark"></i>
          <img id='me' src={Pic}></img>
        </div>
    )
}

export default Home