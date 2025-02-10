import React from 'react'
import Hero from '../components/Hero'
import CoinSection from '../components/CoinSection'
import Why from '../components/Why'
import Steps from '../components/Steps'
import CallToAction from '../components/CallToAction'
import Reviews from '../components/Reviews'
import Footer from '../layouts/Footer'

const Home = () => {
  return (
    <div>
        <Hero/>
        <CoinSection/>
        <Why/>
        <Steps/>
        <CallToAction/>
        <Reviews/>
        <Footer/>
    </div>
  )
}

export default Home