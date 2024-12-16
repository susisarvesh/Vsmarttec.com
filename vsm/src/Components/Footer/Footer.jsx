import { Outlet } from "react-router-dom";
import { FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa"; // Import FontAwesome icons

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
  'Smart Building Automation',
];

const contactInfo = [
  { name: 'vsmarttec@gmail.com', path: 'mailto:vsmarttec@gmail.com' },
  { name: '+91 9444971577', path: 'tel:+91 9444971577' },
  { name: '+91 4426262743', path: 'tel:+91 4426262743' },
  { name: 'Book a free discovery call', path: '/contact' },
];

const Footer = () => {
  return (
    <div className="lg:ml-[63px]">
      <Outlet></Outlet>

      <footer className="w-full px-4 py-8 flex flex-col items-center md:flex-row justify-between items-start text-white font-poppins">
        <div
          className="relative w-full hidden md:w-[38%] p-5 border border-gray-300 rounded-lg mb-6 md:mb-0 h-full md:mr-4 overflow-hidden lg:h-[320px] lg:block"
          style={{
            backgroundImage:
              "url('https://ik.imagekit.io/zhf0gkzac/VSmart/bgvsmart.jpg?updatedAt=1724840796012')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="relative">
            <img
              src="https://ik.imagekit.io/zhf0gkzac/VSmart/Vsmarttechnologies.png?updatedAt=1724834363389"
              alt="VSmart Technologies Logo"
              className="w-full max-w-[150px] h-auto"
            />
          </div>
        </div>

        <div className="w-full md:w-full flex flex-col md:flex-col justify-between p-6 border border-gray-300 rounded-lg h-full bg-customBlue">
          <div className="flex flex-col md:flex-row justify-around w-full">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-semibold mb-4">Quick links</h3>
              <ul className="text-gray-200 space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index} className="hover:text-white cursor-pointer">
                    <a href={link.path}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-semibold mb-4">Our services</h3>
              <ul className="text-gray-200 space-y-2">
                {services.map((service, index) => (
                  <li key={index} className="hover:text-white cursor-pointer">
                    <a
                      href={`/${service.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <ul className="text-gray-200 space-y-2">
                {contactInfo.map((contact, index) => (
                  <li key={index} className="hover:text-white cursor-pointer">
                    <a href={contact.path}>{contact.name}</a>
                  </li>
                ))}
              </ul>
              <div className="flex space-x-4 mt-4">
                {/* Social Media Icons */}
                <a
                  href="https://x.com/VsmartTechnolog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-white"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-white"
                >
                  <FaYoutube size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/vsmart-technologies-59946544/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-white"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-300 pt-4 w-full flex flex-col justify-between items-center gap-5 md:flex-row lg:flex-row">
            <p className="text-xs font-semibold">
              &copy; 2024 Vsmart Technologies Pvt.Ltd.
              <span className="text-gray-200 ml-1">All rights reserved.</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
