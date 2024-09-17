import React from 'react'
import Pages from '../Sections/About/Pages'
import JobOpenings from '../Sections/Careers/JobOpenings'
import CareersHero from '../Sections/Careers/CareersHero'
import CareerHighlights from '../Sections/Careers/CareerHighlights'

function Carriers() {
  return (
    <div className="mt-[63px] p-1  lg:ml-[63px]">
      <CareersHero></CareersHero>
      <CareerHighlights></CareerHighlights>
      <JobOpenings></JobOpenings>
    </div>
  )
}

export default Carriers