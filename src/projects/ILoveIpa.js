import React from 'react'


const ILoveIpa = () => {
    return(
        <div>
        <h1 className="portfilio__H1">PROJECTS</h1>
          <div className='portfolio__divs'>
              <div className='portfolio__container'>
                  <h2 className='portfolio__h2'>I Love IPA</h2>
                     <a className='portfolio__demo' href='https://wonderful-lamarr-3ee816.netlify.app'>DEMO</a>
                     <a className='portfolio__Frontend' href='https://github.com/kurwitz3/I-Love-Ipa-Frontend'>FRONT END</a>
                     <a className='portfolio__Backend' href='https://github.com/kurwitz3/I-Love-Ipa-Backend'>BACK END</a>
                     {/*<img className='portfolio' src={Pic} alt=''></img>*/}
              </div>
          </div>
        </div>
    )
}
export default ILoveIpa

