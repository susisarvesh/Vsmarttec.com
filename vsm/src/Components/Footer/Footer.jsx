import { Outlet } from "react-router-dom"
const quickLinks = [
  { name: 'Home', path: '/' },
    { name: 'About us', path: '/about-us' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'Contact', path: '/contact' },
   { name: 'Careers', path: '/careers' },
];

const services = [
  'Electronic Security Systems',
  'Physical Security',
  'Audio-Visual Innovations',
  'Fire Safety & Emergency',
  'Smart Building Automation '
];

const contactInfo = [
  { name: 'vsmarttec@gmail.com', path: 'mailto:vsmarttec@gmail.com' },
  { name: '+91 9444971577', path: 'tel:+91 9444971577' },
  { name: '	+91 4426262743', path: 'tel:+91 4426262743' },
  { name: 'Book a free discovery call', path: '/book-call' }
];

const Footer = () => {
  return (
    <div className="lg:ml-[63px]">
            <Outlet></Outlet>

    <footer className="w-full px-4 py-8 flex flex-col items-center md:flex-row justify-between items-start text-white font-poppins ">
        <div className="relative w-full hidden md:w-[38%] p-5 border border-gray-300 rounded-lg mb-6 md:mb-0 h-full md:mr-4 overflow-hidden lg:h-[320px] lg:block"
          style={{
    backgroundImage: "url('https://ik.imagekit.io/zhf0gkzac/VSmart/bgvsmart.jpg?updatedAt=1724840796012')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
        >
       <div className="relative">
  {/* <img
    src="https://ik.imagekit.io/zhf0gkzac/VSmart/Vsmarttechnologies.png?updatedAt=1724834363389"
    alt="Background Image"
    className="absolute top-0 left-0 w-full h-full object-cover"
  /> */}
</div>

        {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div> */}
          <div className="relative z-10 flex flex-col justify-start h-full">
            <div className='h-auto w-auto' >
           <img src="https://ik.imagekit.io/zhf0gkzac/VSmart/Vsmarttechnologies.png?updatedAt=1724834363389"  alt="VSmart Technologies Logo"
            className="w-full max-w-[150px] h-auto"/>
          </div>
              {/* <p className="text-customBlue text-base">
            Vsmart delivers custom security solutions, innovative software development, and expert support, ensuring your business is secure, efficient, and expertly managed with tailored technology and reliable service. We safeguard your operations and enhance efficiency with cutting-edge solutions and dedicated support.
          </p> */}
        </div>
      </div>

      <div className="w-full md:w-full flex flex-col md:flex-col justify-between p-6 border border-gray-300 rounded-lg h-full bg-customBlue">
        <div className="flex flex-col md:flex-row justify-around w-full">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Quick links</h3>
            <ul className="text-gray-200 space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index} className='hover:text-white cursor-pointer'>
                  <a href={link.path}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Our services</h3>
            <ul className="text-gray-200 space-y-2">
              {services.map((service, index) => (
               <li key={index} className='hover:text-white cursor-pointer'><a href={`/${service.toLowerCase().replace(/\s+/g, '-')}`}>{service}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="text-gray-200 space-y-2">
              {contactInfo.map((contact, index) => (
                <li key={index} className='hover:text-white cursor-pointer'>
                  <a href={contact.path}>{contact.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-600 pt-4 w-full flex flex-col justify-between items-center gap-5 md:flex-row lg:flex-row">
          <p className="text-xs font-semibold">&copy; 2024 Vsmart Technologies Pvt.Ltd.<span className='text-gray-400 ml-1'>All rights reserved.</span></p>
          {/* <div className="flex space-x-4">
            <Link to="#" className="text-xs hover:underline text-gray-400">Privacy Policy</Link>
            <Link to="#" className="text-xs hover:underline text-gray-400">Terms & Conditions</Link>
          </div> */}
          {/* <div className='text-5xl'>
            <span className="text-5xl font-medium bg-text-fade-left-right text-gradient bg-clip-text">2020</span> - 24
          </div> */}
        </div>
      </div>
      </footer>
      </div>
  );
};

export default Footer;
