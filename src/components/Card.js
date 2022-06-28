import React from 'react'
import Image1 from '../images/image1.png'
import Star from '../images/Star.png'
const Card = () => {
  return (
    <div className='card'>
        <img src={Image1} className='card-image' />
        <div className='card-stats'>
            <img src={Star} />
            <span>5.0</span>
            <span>(6) </span>
            <span>USA</span>
            <p>Life Lessons with Katie</p>
            <p>From $136 / person</p>

        </div>
    </div>
  )
}

export default Card