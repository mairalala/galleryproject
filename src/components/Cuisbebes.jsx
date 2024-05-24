import React from 'react'
import cuisbebes1 from '../images/cuisbebes.jpg'

const Cuisbebes = ({ className }) => {
  return (
    <div className={`image-container ${className}`}>
        <img src={cuisbebes1} alt="Cuis besbes con su madre" className="image"/>
    </div>
  )
}

export default Cuisbebes