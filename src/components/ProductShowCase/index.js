import React, { useEffect, useRef, useState } from 'react';
import './productShowCase.css'

const ProductShowCase = () => {
    const [showAnimation, setShowAnimation] = useState(false);
    const observerRef = useRef(null);

    const toggleAnination = (e) => {
        if(e[0]?.isIntersecting){
            setShowAnimation(true)
        }
    }

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
    }

    useEffect(() => {
        const observer = new IntersectionObserver (toggleAnination, options);

        if(!showAnimation) {
            if(observerRef.current) {
                observer.observe(observerRef.current)
            }
        }

        return () => {
            if (observerRef.current) {
                observer.unobserve(observerRef.current)
            }
        }
    })

  return (
    <div className={`product-showcase  ${showAnimation ? 'scale-in-bottom' : '' }`}
    ref={observerRef}
    >
       {showAnimation && ( <div className='showcase-wrapper'>
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
        </div>)}
    </div>
  )
}

export default ProductShowCase
