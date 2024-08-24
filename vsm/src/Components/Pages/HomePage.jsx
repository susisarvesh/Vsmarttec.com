import Hero from "../Sections/Home/Hero"
import Services from "../Sections/Home/Services"
import Testimonials from "../Sections/Home/Testimonials"


function HomePage() {
  return (
    <div className="mt-[63px] p-1  lg:ml-[63px]">
      <div>
        <Hero></Hero>
        {/* <Services></Services> */}
        <Testimonials></Testimonials>
        </div>
    </div>
  )
}

export default HomePage