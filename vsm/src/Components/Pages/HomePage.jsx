import Bookcall from "../Footer/Bookcall"
import AboutFounder from "../Sections/About/AboutFounder"
import Companies from "../Sections/Home/Companies"
import Hero from "../Sections/Home/Hero"
import Services from "../Sections/Home/Services"
import Solution from "../Sections/Home/Solution"
// import Services from "../Sections/Home/Services"



function HomePage() {
  return (
    <div className="mt-[63px] p-1  lg:ml-[63px]">
      <div>
        <Hero></Hero>
      
        <Companies></Companies>
        <Solution></Solution>
        {/* <Founder></Founder> */}
        <AboutFounder></AboutFounder>
        
        <Services></Services>
         <Bookcall></Bookcall>

        </div>
    </div>
  )
}

export default HomePage