import React from 'react'
import Pic from '../Images/me2.jpeg'
import '../CSS/HomePage.css'

const Home = () =>{
    return (
        <div id= 'homePage__container'>
          <p id="homePage__welcome">Hello! I'm</p>
            <h1 id="homePage__name">Richard Kurwitz</h1>
               <p id="homePage__opening-paragraph">I'm a FlatIron School graduate who has experience in Ruby on Rails and JavaScript based programming. 
               A former certified welder making a career change and bringing the same dedication and strong work ethics to job performance and appyling it to coding. 
               With relentless positivity and strong teamwork skills, I will make the perfect candidate to work in any programming environment.
               </p>
            <div className='homePage__pic-container'>
               <img id='homePage__pic' src={Pic} alt=''></img>
            </div>
        </div>
    )
}

export default Home