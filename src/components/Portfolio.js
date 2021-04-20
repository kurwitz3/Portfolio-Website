import React from 'react'
import Pic from './Iloveipa.jpeg'
import Pic1 from './Ao.jpeg'


const Portfolio = () => {
    return (
        <div id='IpaDiv'>
            <h1 id='h1'>PROJECTS</h1>
            <h2 id='IpaH2'>I Love IPA</h2>
            <p id='IpaP'>An IPA app that allows a user to review and find different IPA’s from breweries around the country.</p>
            <img className='portfolio' src={Pic}></img>
            <a  id='demo' href='https://wonderful-lamarr-3ee816.netlify.app'>DEMO</a>
            <a id='IpaFront' href='https://github.com/kurwitz3/I-Love-Ipa-Frontend'>Front End</a>
            <a id='IpaBack' href='https://github.com/kurwitz3/I-Love-Ipa-Backend'>Back End</a>
            <h2 id='AOh2'>American Outfitters</h2>
            <p id='AoP'>A hunting guide service app with information about hunting services provided by the company.</p>
            <img  id='AoPic'src={Pic1}></img>
            <a  id='demo' href='https://loving-shaw-2b2b97.netlify.app'>DEMO</a>
            <a id='IpaFront' href='https://github.com/kurwitz3/outfitter-frontend'>Front End</a>
            <a id='IpaBack' href='https://github.com/kurwitz3/outfitters-backend'>Back End</a>
        </div>
    )
}

export default Portfolio