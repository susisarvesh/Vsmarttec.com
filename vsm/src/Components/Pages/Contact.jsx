import Pages from '../Sections/About/Pages'
import ContactHero from '../Sections/Contact/ContactHero'
import ContactSidebar from '../Sections/Contact/ContactSidebar'
import Location from '../Sections/Contact/Location'
import Companies from '../Sections/Home/Companies'
import Testimonials from '../Sections/Home/Testimonials'

function Contact() {
  return (
    <div className="mt-[63px] p-1  lg:ml-[63px]">
      <ContactHero></ContactHero>
      <ContactSidebar></ContactSidebar>
      <Location></Location>
  

    </div>
  )
}

export default Contact