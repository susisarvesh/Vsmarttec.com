import AboutHero from "../Sections/About/AboutHero"
import Companies from "../Sections/Home/Companies"
import Founder from "../Sections/Home/Founder"
import Testimonials from "../Sections/Home/Testimonials"


function About() {
  return (
    <div className="mt-[63px] p-1  lg:ml-[63px]">
      <AboutHero></AboutHero>
      <Companies></Companies>
      <Founder></Founder>
      <Testimonials></Testimonials>
    </div>
  )
}

export default About