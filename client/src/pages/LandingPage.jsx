import React from 'react'
import Features from '../components/Features'
import HeroText from '../components/HeroText'
import Navbar from '../components/Navbar'

const LandingPage = () => {
  return (
    <div>
      <header
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
        className="min-h-screen h-[100%] bg-no-repeat bg-cover bg-top bg-slate-100 flex flex-col"
      >
        <Navbar />
        <HeroText />
      </header>
      <section>
        <Features />
      </section>
    </div>
  )
}

export default LandingPage