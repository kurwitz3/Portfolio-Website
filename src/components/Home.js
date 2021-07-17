import React from 'react'
import Pic from '../Images/me2.jpeg'

const Home = () =>{
    return (
        <div id= 'home-div'>
          <p id="welcome">Hello! I'm</p>
          <h1 id="name">Richard Kurwitz</h1>
          <p id="title">I'm a FlatIron School graduate who has experience in Ruby on Rails and JavaScript based programming. 
          A former certified welder making a career change and bringing the same dedication and strong work ethics to job performance and appyling it to coding. 
          With relentless positivity and strong teamwork skills, I will make the perfect candidate to work in any programming environment.
          </p>
          <img id='me' src={Pic} alt=''></img>
        </div>
    )
}

export default Home