import React from 'react'
import Header from '../common/Header'
import BrandsLove from '../components/BrandsLove'
import CredExperience from '../components/credExperience'
import CredSecurity from '../components/credSecurity'
import FeelSpecial from '../components/FeelSpecial'
import HeroSection from '../components/HeroSection'
import ProductShowCase from '../components/ProductShowCase'
import WindowPeak from '../components/WindowPeak'

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection/>
      <ProductShowCase />
      <FeelSpecial />
      <BrandsLove />
      <CredExperience />
      <div className='non-mobile'>
        <WindowPeak />
      </div>
      <CredSecurity />
    </>
  )
}

export default HomePage
