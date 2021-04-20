import React from 'react'
import Pic from './IMG_0769.jpeg'

const Home = () =>{
    return (
        <div>
          <p id="welcome">Hello! I'm</p>
          <h1 id="name">Richard Kurwitz</h1>
          <p id="title"> A Full Stack Web Developer</p>
          <button id="btn">Resume</button>
          <i className="devicon-redux-original"></i>
          <i className="devicon-react-original"></i>
          <i className="devicon-rails-plain-wordmark"></i>
          <i className="devicon-javascript-plain"></i>
          <i className="devicon-html5-plain-wordmark"></i>
          <i className="devicon-css3-plain-wordmark"></i>
          <i className="devicon-postgresql-plain-wordmark"></i>
          <i className="devicon-ruby-plain"></i>
          <i className="devicon-visualstudio-plain"></i>
          <i className="devicon-heroku-original-wordmark"></i>
          <i className="devicon-apple-original"></i>
          <img id='me' src={Pic} alt=''></img>
        </div>
    )
}

export default Home