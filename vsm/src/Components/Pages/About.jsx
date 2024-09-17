import AboutHero from "../Sections/About/AboutHero"
import Companies from "../Sections/Home/Companies"
import Testimonials from "../Sections/Home/Testimonials"
import Process from "../Sections/About/Process"
import AboutFounder from "../Sections/About/AboutFounder"
import Bookcontact from "../Sections/About/Bookcontact"
import Ceos from "../Sections/About/Ceos"
// import Ceos from "../Sections/About/Ceos"

function About() {
  return (
    <div className="mt-[63px] p-1  lg:ml-[63px]">
      <AboutHero></AboutHero>
     
      <Companies></Companies>
      
     
      {/* <Ceos></Ceos> */}
       <Process></Process>
      <AboutFounder></AboutFounder>
  
  
      <Testimonials></Testimonials>
      <Bookcontact></Bookcontact>
    </div>
  )
}

export default About