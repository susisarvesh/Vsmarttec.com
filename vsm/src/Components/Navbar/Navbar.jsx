import{ useState } from 'react';
import { LuArrowUpRight } from "react-icons/lu";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

      const menuItems = [
        {
            title: 'Security & Surveillance Solutions',
            description: 'Protect your space with cutting-edge security solutions featuring globally recognized cameras, smart video recorders, and high-quality monitors.',
            link: '/security-surveillance',
        },
        {
            title: 'Time Attendance & Access control',
            description: 'Efficiently track employee hours and manage access with our advanced time attendance and access control systems, perfect for businesses of any size',
            link: '/time-attendance',
        },
        {
             title: 'Smart Gate & Parking Solutions',
            description: 'Secure your premises with our smart gate and parking automation systems, offering advanced access control for businesses.',
            link: '/security-surveillance',
        },
        {
            title: 'Discover Our Solutions',
            description: 'Discover our full range of security and automation solutions. Click here to learn how we can enhance your safety and access control.',
            link: '/security-surveillance',
        },
    ];

    const pageLinks = [
        { name: "Home", link: "/" },
        { name: "About Us", link: "/about-us" },
        { name: "Solutions", link: "/solutions" },
        { name: "Contact", link: "/contact" },
        { name: "Carriers", link: "/carriers" },
    ];

    return (
        <div>
            <div className="fixed top-0 left-0 w-full z-50">
                <div className='h-[63px] flex justify-between items-center border-b-2 bg-white'>
                    <div className="ml-7 flex items-center mb-2 bg-red-200"><img src="https://ik.imagekit.io/zhf0gkzac/VSmart/Vsmartec(1).png?updatedAt=1724082264366" alt="" className='object-cover h-[55px] lg:h-[64px]' /></div>
                    <div className="flex items-center justify-evenly h-full">
                        <button className='bg-blue-800 text-white rounded-md p-2 hidden lg:flex items-center group'>Get in touch <p className='arrow-icon'><LuArrowUpRight className='ml-2 text-[20px] transform transition-transform duration-300 ease-in-out group-hover:rotate-[15deg]' /></p></button>

                        <div className='border-l-2 w-20 h-full ml-2 flex justify-center items-center'>
                            <div
                                className={`hamburger ${isMenuOpen ? 'open' : ''}`}
                                onClick={handleClick}
                            >
                                <div className="line1"></div>
                                <div className="line2"></div>
                                <div className="line3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Menu Component */}
            <div
                className={`fixed w-full h-[calc(100vh-63px)] bg-white z-40 p-4 overflow-y-auto lg:h-[calc(100vh-63px)] lg:w-[calc(100vw-63px)] lg:top-[63px] lg:left-[63px] md:w-full transition-opacity duration-500 ease-in-out ${
                    isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
            >
                <div className="grid gap-4 transition-opacity duration-500 ease-in-out">
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-2'>
                        <div className="text-xl row-span-5 col-span-2 transition-opacity duration-500 ease-in-out">
                            <div className='h-[450px] p-2 rounded-[15px] bg-blue-800 text-white'>
                                <div className='flex flex-col h-full justify-between items-start text-[24px] border border-white rounded-lg'>
                                    {pageLinks.map((link, index) => (
                                        <a href={link.link} key={index} className='flex justify-between items-center p-3 w-full h-full group'>
                                            <li className='list-none text-[27px]'>{link.name}</li>
                                            <p className='arrow-icon'><LuArrowUpRight className='text-[32px] transform transition-transform duration-300 ease-in-out group-hover:rotate-[25deg]' /></p>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                       
                        <div className="p-2 text-xl h-[100px] row-span-5 rounded-[15px] transition-opacity duration-500 ease-in-out bg-gradient-to-r from-blue-800 to-orange-400 animate-gradient md:h-[100px] lg:h-auto"></div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 text-white lg:grid-cols-4 gap-2'>
                        {menuItems.map((item, index) => (
                            <a href={item.link} key={index} className="p-5 text-xl rounded-[15px] flex flex-col justify-between h-[300px] lg:h-[400px] bg-blue-800 transition-opacity duration-500 ease-in-out group ">
                                <div className='flex justify-between items-center '>
                                    <h3 className='text-[22px]'>{item.title}</h3>
                                    <p><LuArrowUpRight className='text-[30px] transform transition-transform duration-300 ease-in-out group-hover:rotate-[25deg]' /></p>
                                </div>
                                <div className='text-[16px] text-gray-200'>
                                    {item.description}
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
