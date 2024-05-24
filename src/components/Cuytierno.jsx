import React from 'react'
import cuytierno1 from '../images/cuytierno.jpg'

const Cuytierno = ({ className }) => {
  return (
    <div className={`image-container ${className}`}>
        <img src={cuytierno1} alt="Cuy durmiendo dentro de un cama para mascotas de color verde" className="image"/>
    </div>
  )
}

export default Cuytierno