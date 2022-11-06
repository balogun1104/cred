import React from 'react';
import './productShowCase.css'

const ProductShowCase = () => {
  return (
    <div className='product-showcase'>
        <div className='showcase-wrapper'>
            <img src='https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-left-2.png' 
            className='showcase-ui showcase-mockup-1'
            />
            <img src='https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-left-1.png' 
            className='showcase-ui showcase-mockup-2'
            />
            <img src='https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-center.png' 
            className='showcase-ui showcase-mockup-3'
            />
            <img src='https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-right-1.png' 
            className='showcase-ui showcase-mockup-4'
            />
            <img src='https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-right-2.png' 
            className='showcase-ui showcase-mockup-5'
            />
        </div>
    </div>
  )
}

export default ProductShowCase
