import React from 'react'
import Header from '../common/Header'
import CredExperience from '../components/credExperience'
import FeelSpecial from '../components/FeelSpecial'
import HeroSection from '../components/HeroSection'
import ProductShowCase from '../components/ProductShowCase'

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection/>
      <ProductShowCase />
      <FeelSpecial />
      <CredExperience />
    </>
  )
}

export default HomePage
