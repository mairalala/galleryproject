import React from 'react'
import cobaya1 from '../images/cobaya.jpg'

const Cobaya = ({ className }) => {
  return (
    <div className={`image-container ${className}`}>
        <img src={cobaya1} alt="Cuy con paisaje de una playa de fondo" className="image"/>
    </div>
  )
}

export default Cobaya