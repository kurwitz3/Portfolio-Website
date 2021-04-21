import React from 'react'
import Pic from './me.jpeg'

const Home = () =>{
    return (
        <div>
          <p id="welcome">Hello! I'm</p>
          <h1 id="name">Richard Kurwitz</h1>
          <p id="title">I'm a FlatIron School Graduate who has experience in Ruby on Rails and JavaScript based programming. 
          A former certified welder making a career change and bringing the same dedication to job performance and strong work ethic and appyling it to coding. 
          With relentless positivity and strong teamwork skills I will make the perfect canidate to work in any programming environment.
          </p>
          
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