import React from 'react'
import '../CSS/Portfolio.css'
import ILoveIpa from '../projects/ILoveIpa'
import AmericanOutfitters from '../projects/AmericanOutfitters'
import { Component } from 'react'

class Portfolio extends Component{
  render(){
    return (
       <div>
         <h1 className="portfolio__H1">PROJECTS</h1>
         <hr className="portfolio__line-break"></hr>
          <ILoveIpa />
          <hr className="portfolio__line-break"></hr>
          <AmericanOutfitters />
       </div>
    )
  } 
}
export default Portfolio