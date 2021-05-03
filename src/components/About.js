import React from 'react'
import Pic from './me.jpeg'


const About = () => {
    return (
        <div id='about'>
            <h1 className='my-story'>My Story</h1>
            <p className='about'>
              I was born and raised in a small town in California. I'm a very creative and outoging person who has a passion
              for technology. I love a good project, whether it's at home, working on my truck, or at work. I love the outdoors.
              I also love grabbing a hot dog at a baseball game. 
            </p>
            <p className='about'>
              I've done some of the hardest work in the most extreme conditions, like working on a fishing boat in Alaska in 
              negative 20-degree weather to working in 110-degree weather on an oil rig
              in the oil patch, to most recently working as a certified welder at a trucking company for over ten years. 
            </p>
            <p className='about'>
              Recently, my wife graduated school and became a court reporter. She was offered a job in the D.C., metro area, which she accepted. Once we decided to move, 
              I decided this was my chance to go back to school and learn something that I was passionate about, which is technology. 
            </p>
            <p className='about'>
              After some research, I joined FlatIron School's software engineering program, which I just recently graduated from in April of 2021. Now
              I'm looking to start my career in full stack development and join a develpoment team where I can put my creativity and hard work
              ethics to use.
            </p>
            <div id='img-div'> <img  className="about-pic" src={Pic} alt=''></img></div>
        </div>
    )
}

export default About