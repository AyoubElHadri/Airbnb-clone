import React from 'react'
import Image1 from '../images/image1.png'
import Image2 from '../images/image2.png'
import Image3 from '../images/image3.png'
import Star from '../images/Star.png'
const Card = () => {
  return (
    <div className='cards' >
      <div className='card'>
        <img src={Image1} className='card-image' />
        <div className='card-stats'>
            <img src={Star} className='star'/>
            <span>4.0</span>
            <span className='text-gray'>(4) </span>
            <span className='text-gray'>USA</span></div>
            <p className='text-detail'>Life Lessons with Zaferes</p>
            <p className='text-detail' > <span className='bold'>From $136</span> / person</p>

            </div>
      <div className='card'>
        <img src={Image2} className='card-image' />
        <div className='card-stats'>
            <img src={Star} className='star'/>
            <span>4.5</span>
            <span className='text-gray'>(3) </span>
            <span className='text-gray'>USA</span></div>
            <p className='text-detail'>Life Lessons with Marie</p>
            <p className='text-detail' > <span className='bold'>From $70</span> / person</p>

            </div>
      <div className='card'>
        <img src={Image3} className='card-image' />
        <div className='card-stats'>
            <img src={Star} className='star'/>
            <span>5.0</span>
            <span className='text-gray'>(6) </span>
            <span className='text-gray'>Canada</span></div>
            <p className='text-detail'>Life Lessons with Leo</p>
            <p className='text-detail' > <span className='bold'>From $99</span> / person</p>

            </div>
    </div>
  )
}

export default Card