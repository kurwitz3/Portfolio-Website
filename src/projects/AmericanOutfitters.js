import React from 'react'
import Pic1 from '../Images/Ao.jpeg'

const AmericanOutfitters = () => {
    return (
      <div className="portfolio__pic">
         <h2 className="portfolio__h2">American Outfitters</h2>
         <a className="portfolio__demo" href='https://loving-shaw-2b2b97.netlify.app'>DEMO</a>
         <a className="portfolio__Frontend" href='https://github.com/kurwitz3/outfitter-frontend'>Front End</a>
         <a className="portfolio__Backend" href='https://github.com/kurwitz3/outfitters-backend'>Back End</a>
         <img className="portfolio__image" src={Pic1} alt=''></img>
      </div>
    )
}

export default AmericanOutfitters