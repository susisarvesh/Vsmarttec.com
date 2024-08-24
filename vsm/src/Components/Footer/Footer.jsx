import { Link } from 'react-router-dom';
import { Outlet } from "react-router-dom"
const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About us', path: '/about-us' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' }
];

const services = [
  'Webflow development',
  'Web design',
  'Figma to Webflow',
  'WordPress to Webflow',
  'Branding'
];

const contactInfo = [
  { name: 'hello@aspectify.design', path: 'mailto:hello@aspectify.design' },
  { name: '+40 723 646 820', path: 'tel:+40723646820' },
  { name: 'Book a free discovery call', path: '/book-call' }
];

const Footer = () => {
  return (
    <div className="lg:ml-[63px]">
            <Outlet></Outlet>

    <footer className="w-full px-6 py-8 flex flex-col md:flex-row justify-between items-start text-white font-poppins">
      <div className="relative w-full md:w-[38%] p-6 border border-gray-300 rounded-lg mb-6 md:mb-0 h-full md:mr-4 bg-black overflow-hidden">
        <video className="absolute top-0 left-0 w-full h-full object-cover">
          <source src="https://cdn.prod.website-files.com/66917f970aa31c65959816ce%2F6691813bb8a59b7a8a0f1b53_Neon-Glow-Abstract-Geometric-Design-2024-02-20-16-41-14-Utc-transcode.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-normal mb-44">Aspectify Design<span className='text-blue-500'>.</span></h2>
          <p className="text-white text-base">
            We're a UK based Webflow design agency focused on empowering startups, B2B, and fintech companies with an impactful online presence.
            We deliver high-quality, converting websites with impressive turnaround times.
          </p>
        </div>
      </div>

      <div className="w-full md:w-[60%] flex flex-col md:flex-col justify-between p-6 border border-gray-300 rounded-lg h-full bg-black">
        <div className="flex flex-col md:flex-row justify-around w-full">
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick links</h3>
            <ul className="text-gray-400 space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index} className='hover:text-white cursor-pointer'>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Our services</h3>
            <ul className="text-gray-400 space-y-2">
              {services.map((service, index) => (
                <li key={index} className='hover:text-white cursor-pointer'>{service}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="text-gray-400 space-y-2">
              {contactInfo.map((contact, index) => (
                <li key={index} className='hover:text-white cursor-pointer'>
                  <a href={contact.path}>{contact.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-600 pt-4 w-full flex flex-col justify-between items-center gap-5 md:flex-row lg:flex-row">
          <p className="text-xs font-semibold">&copy; Aspectify Design.<span className='text-gray-400'>All rights reserved.</span></p>
          <div className="flex space-x-4">
            <Link to="#" className="text-xs hover:underline text-gray-400">Privacy Policy</Link>
            <Link to="#" className="text-xs hover:underline text-gray-400">Terms & Conditions</Link>
          </div>
          <div className='text-5xl'>
            <span className="text-5xl font-medium bg-text-fade-left-right text-gradient bg-clip-text">2020</span> - 24
          </div>
        </div>
      </div>
      </footer>
      </div>
  );
};

export default Footer;
