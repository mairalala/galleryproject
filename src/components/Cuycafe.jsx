import React from 'react'
import cuycafe1 from '../images/cuycafe.jpg'

const Cuycafe = ({ className }) => {
  return (
    <div className={`image-container ${className}`}>
        <img src={cuycafe1} alt="Cuy de color amarillento con una mancha cafe en la cara envuelto en una manta blanca" className="image" />
    </div>
  )
}

export default Cuycafe