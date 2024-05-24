import React from 'react'
import cuiss1 from '../images/cui.jpg'
const Cuiss = ({ className }) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={cuiss1} alt="Cuis "className="image" />
    </div>
  )
}

export default Cuiss