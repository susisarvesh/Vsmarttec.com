import React from 'react'
import Pages from '../Sections/About/Pages'
import SolutionHero from '../Sections/Solutions/SolutionHero'
import AboutFounder from '../Sections/About/AboutFounder'
import Bookcontact from '../Sections/About/Bookcontact'
import Solutions from '../Sections/Solutions/Solutions'
import Testimonials from '../Sections/Home/Testimonials'

function Solution() {
  return (
    <div className="mt-[63px] p-1  lg:ml-[63px]">
      <SolutionHero></SolutionHero>
      <Solutions></Solutions>
    
    <Testimonials></Testimonials>
      <Bookcontact></Bookcontact> 
    </div>
  )
}

export default Solution