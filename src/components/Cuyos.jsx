import React from 'react'
import cuyos1 from '../images/cuyos.jpg'

const Cuyos = ({ className }) => {
  return (
    <div className={`image-container ${className}`}>
        <img src={cuyos1} alt="Cuyos de color amarillento o cafle claroo con manyas negras en l acara y un cuy blanco con una mancha cafe en la cara" className="image"/>
    </div>
  )
}

export default Cuyos