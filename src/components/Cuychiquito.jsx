import React from 'react'
import cuychiquito1 from '../images/cuychiquito.jpg'

const Cuychiquito = ({ className }) => {
  return (
    <div className={`image-container ${className}`}>
        <img src={cuychiquito1} alt="Cuy beeb de color blanco sobre una manta" className="image"/>
    </div>
  )
}

export default Cuychiquito