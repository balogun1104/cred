import React from 'react'
import Button from '../common/Button'
import './heroSection.css'

const HeroSection = () => {
  return (
    <div className='her-section-wrapper'>
      {/* <div className='flex absolute-center hero-claim-label'>
        <div></div>
      </div> */}
      <div className='flex absolute-center flex-col hero-section max-width'>
        <div className='hero-heading'>
           rewards for paying credit card bills.
        </div>
        <div className='hero-subheading'>
           join 9M+ members who win rewards and cashbacks everyday
        </div>
        <Button buttonText='Download Cred'/>
      </div>
    </div>
  )
}

export default HeroSection
