import React from 'react'
import conejillodeindias1 from '../images/conejillodeindias.jpg'

const Conejillodeindias = ({ className }) => {
  return (
    <div className={`image-container ${className}`}>
        <img src={conejillodeindias1} alt="Cuy de color blanco con una mancha negra en la cara sobre una manta de color morado" className="image"/>
    </div>
  )
}

export default Conejillodeindias