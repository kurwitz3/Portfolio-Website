import React from 'react'
import Pic1 from '../components/Ao.jpeg'

const AmericanOutfitters = () => {
    return (
        <div>
            <div className='portfolio-divs'>
              <div className='portfolio-container'>
                 <h2 id='Ao-H2'>American Outfitters</h2>
                 <a  href='https://loving-shaw-2b2b97.netlify.app'>DEMO</a>
                 <a  href='https://github.com/kurwitz3/outfitter-frontend'>Front End</a>
                 <a  href='https://github.com/kurwitz3/outfitters-backend'>Back End</a>
                 <br></br>
                 <img id='AoPic'src={Pic1} alt=''></img>
              </div>
             </div>

        </div>
    )
}

export default AmericanOutfitters