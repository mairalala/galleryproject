import React from 'react'
import ima8a from '../images/ima8.jpg'
const Ima8 = ({ className }) => {
  return (
    <div className={`image-container ${className}`}>
        <img src={ima8a} alt="Cuy Apoyandose en sus patas" className="image"/>
    </div>
  )
}

export default Ima8