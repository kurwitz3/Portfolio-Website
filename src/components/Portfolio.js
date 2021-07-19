import React from 'react'
import '../CSS/Portfolio.css'
import ILoveIpa from '../projects/ILoveIpa'
import AmericanOutfitters from '../projects/AmericanOutfitters'


const Portfolio = () => {
    return (
       <div>
         <h1 className="portfolio__H1">PROJECTS</h1>
           <ILoveIpa />
           <AmericanOutfitters />
       </div>
    )
  } 

export default Portfolio