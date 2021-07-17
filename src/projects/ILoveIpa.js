import React from 'react'
import Pic from '../Images/Iloveipa.jpeg'

const ILoveIpa = () => {
    return(
      <div >
         <div className="portfolio__pic">
            <h2 className='portfolio__h2'>I Love IPA</h2>
            <a className='portfolio__demo' href='https://wonderful-lamarr-3ee816.netlify.app'>DEMO</a>
            <a className='portfolio__Frontend' href='https://github.com/kurwitz3/I-Love-Ipa-Frontend'>FRONT END</a>
            <a className='portfolio__Backend' href='https://github.com/kurwitz3/I-Love-Ipa-Backend'>BACK END</a>
            <img className='portfolio__image' src={Pic} alt=''></img>
          </div>
         <div className="portfolio__buttons">
         
         </div>
         
      </div>
    )
}
export default ILoveIpa

