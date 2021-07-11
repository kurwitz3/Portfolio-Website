import React from 'react'
import Pic from './Iloveipa.jpeg'
import Pic1 from './Ao.jpeg'


const Portfolio = () => {
    return (
        <div>
            <h1 id='h1'>PROJECTS</h1>
            <div className='portfolio-divs'>
              <h2 className='portfolio-h2'>I Love IPA</h2>
              <a className='demo' href='https://wonderful-lamarr-3ee816.netlify.app'>DEMO</a>
              <a className='Frontend' href='https://github.com/kurwitz3/I-Love-Ipa-Frontend'>FRONT END</a>
              <a className='Backend' href='https://github.com/kurwitz3/I-Love-Ipa-Backend'>BACK END</a>
              <br></br>
              <img className='portfolio' src={Pic} alt=''></img>
            </div>
            <div className='portfolio-divs'>
              <h2 id='Ao-H2'>American Outfitters</h2>
              <a className="demo" href='https://loving-shaw-2b2b97.netlify.app'>DEMO</a>
              <a className='Frontend' href='https://github.com/kurwitz3/outfitter-frontend'>Front End</a>
              <a className='Backend' href='https://github.com/kurwitz3/outfitters-backend'>Back End</a>
              <br></br>
              <img id='AoPic'src={Pic1} alt=''></img>
             </div>
        </div>
    )
}

export default Portfolio