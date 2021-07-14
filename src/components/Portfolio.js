import React from 'react'
import ILoveIpa from '../projects/ILoveIpa'
import AmericanOutfitters from '../projects/AmericanOutfitters'
import { Component } from 'react'

class Portfolio extends Component{
  render(){
    return (
       <div>
          <ILoveIpa />
          <AmericanOutfitters />
       </div>
    )
  } 
}
export default Portfolio