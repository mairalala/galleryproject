import React from 'react'
import cuy1 from '../images/cuy.jpg'

const Cuy = ({ className }) => {
  return (
    <div className={`image-container ${className}`}>
        <img src={cuy1} alt="Cuy de color balnco con manchas cafes en su jaula" className="image"/>
    </div>
  )
}

export default Cuy