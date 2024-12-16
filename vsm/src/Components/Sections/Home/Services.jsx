import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LuArrowUpRight } from 'react-icons/lu';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const cardData = [
    {
        title: "Audio-Visual Innovations",
        description: "Vsmart's Audio-Visual solutions enhance communication with seamless collaboration and dynamic displays.",
        buttonText: "Learn More",
        bgColor: "white",
        textColor: "#1E40AF",
         btnbgColor: "#1E40AF",
        btntextColor: "white",
        Links:"/audio-visual-innovations/Meeting-Rooms"
    },
    {
        title: "Fire Safety & Emergency Response Systems",
        description: "Vsmart offers advanced fire detection, alert, and suppression systems for optimal safety and rapid respons",
        buttonText: "Learn More",
        bgColor: "white",
        textColor: "#1E40AF",
         btnbgColor: "#1E40AF",
        btntextColor: "white",
        Links:"/fire-safety-&-emergency/AuxiliaryControls"
    },
    {
        title: "Smart Building Automation Solutions",
        description: "Vsmart offers cutting-edge solutions for HVAC control, lightning protection and comprehensive electronic security",
        buttonText: "Learn More",
         bgColor: "white",
        textColor: "#1E40AF",
         btnbgColor: "#1E40AF",
        btntextColor: "white",
        Links:"/smart-building-automation/EnergyManagement"
    },
];

function Services() {
    const projectRefs = useRef([]);
    const cardRefs = useRef([]);

    useEffect(() => {
        // Animations for the projects
        projectRefs.current.forEach((ref) => {
            gsap.fromTo(
                ref,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: ref,
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                        // Add markers for debugging if needed
                        // markers: true,
                    },
                }
            );
        });

        // Animations for the cards
        gsap.fromTo(
            cardRefs.current,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power2.out',
                stagger: 0.1, // Adjust this value to change the delay between animations
                scrollTrigger: {
                    trigger: cardRefs.current[0],
                    start: 'top 70%',
                    end: 'bottom 10%', // Optional, adjust based on your needs
                    toggleActions: 'play none none none',
                    // Add markers for debugging if needed
                    // markers: true,
                },
            }
        );

        // Optional: Add ScrollTrigger refresh if needed
        ScrollTrigger.refresh();
    }, []);

    return (
        <div className='p-5 bg-customBlue m-2 h-auto rounded-[20px] mt-6 lg:mt-0'>
            {/* first Grid */}
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center mb-3 gap-4'>
                <div ref={(el) => (projectRefs.current[0] = el)} className='text-[28px] md:text-[34px] lg:text-[48px] text-white p-1 lg:p-3'>
                    Innovative Security Solutions & Expert Systems Development <span className='text-orange-400'> Your Partner in Secure Excellence </span>.
                </div>
                <div ref={(el) => (projectRefs.current[1] = el)} className='text-gray-200 text-[17px] md:text-[19px] lg:text-[20px] p-1 lg:p-3'>
                    When your business demands more than the ordinary, you need a security solution that stands out. At Vsmart, we specialize in delivering innovative security systems and custom software solutions that not only protect your assets but also drive your business forward. Trust us to elevate your security and empower your success
                </div>
            </div>

            {/* second grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-white mt-6">
                <div ref={(el) => (projectRefs.current[2] = el)} className="bg-white h-[300px] lg:h-[300px] p-3 rounded-md flex flex-col items-start justify-between">
                    <div className="text-[22px] md:text-[29px] lg:text-[38px] text-customBlue ">
                        Advanced Electronic Security Systems
                    </div>
                    <div className="gap-2">
                        <h3 className='text-[14px] text-customBlue md:text-[19px] lg:text-[20px]'>Vsmart's Electronic Security Solutions provide comprehensive protection with advanced access control, video surveillance, and key management systems, ensuring secure access and real-time monitoring for enhanced safety and efficiency</h3>
                       <a href="/electronic-security-systems/AccessControl"><button className='bg-blue-800 mt-5 text-white rounded-md p-2 flex items-center lg:flex items-center group'>View More <p className='arrow-icon'><LuArrowUpRight className='ml-2 text-[20px] transform transition-transform duration-300 ease-in-out group-hover:rotate-[15deg]' /></p></button> </a>
                    </div>
                </div>
                {/* make this as carousel image section */}
                <div ref={(el) => (projectRefs.current[3] = el)} className="lg:row-span-2 rounded-md overflow-hidden">
                {/* this should be array img infenitely carousel image section */}
                    
                    
                    <img className='w-full h-full object-cover shadow-custom-shadow' src="https://ik.imagekit.io/zhf0gkzac/VSmart/vsmartsolutions/access.jpg?updatedAt=1724655385798" alt="" />
                </div>

                <div ref={(el) => (projectRefs.current[4] = el)} className="rounded-md lg:col-start-1 lg:row-span-2 text-center ">
                {/* this should be array img infenitely carousel image section */}
                    
                    <img className='rounded-md w-full h-full object-cover shadow-custom-shadow' src="https://ik.imagekit.io/zhf0gkzac/VSmart/vsmartsolutions/steptodown.com284200.jpg?updatedAt=1724672065738" alt="" />
                </div>

                {/* ends here */}
                
                <div ref={(el) => (projectRefs.current[5] = el)} className="bg-white h-[300px] lg:h-[300px] p-3 rounded-md flex flex-col items-start justify-between">
                    <div className="text-[22px] md:text-[29px] lg:text-[38px] text-customBlue ">
                        Comprehensive Physical Security
                    </div>
                        <div className="gap-2">
                        <h3 className='text-[14px] text-customBlue md:text-[19px] lg:text-[20px]'>Vsmart’s Physical Security Solutions deliver efficient access control and advanced protection with turnstiles, barriers, automatic gates, and precise intrusion detection systems.</h3>
                           <a href="/physical-security/AutomaticGate">  <button className='bg-blue-800 mt-5 text-white rounded-md p-2 flex items-center lg:flex group'>View More <p className='arrow-icon'><LuArrowUpRight className='ml-2 text-[20px] transform transition-transform duration-300 ease-in-out group-hover:rotate-[15deg]' /></p></button></a>
                    </div>
                </div>
            </div>

            {/* Third Grid */}
            <div className='grid grid-cols-1 mt-5 gap-4 h-full w-full lg:grid-cols-3'>
                {cardData.map((card, index) => (
                    <div 
                        ref={(el) => (cardRefs.current[index] = el)} 
                        key={index} 
                        className='flex flex-col justify-between items-start h-auto p-4 rounded-lg'
                        style={{ backgroundColor: card.bgColor }}>
                        <div className='text-[22px] md:text-[29px] lg:text-[27px] mb-4' style={{ color: card.textColor }}>
                            {card.title}
                        </div>
                        <div className='flex flex-col items-start'>
                            <h3 className='text-[14px] md:text-[19px] lg:text-[18px]' style={{ color: card.textColor }}>{card.description}</h3>
                            <a href={card.Links}> <button className='bg-blue-800 mt-5 text-white rounded-md p-2 flex items-center lg:flex group' style={{ color: card.btntextColor,backgroundColor: card.btnbgColor }}>View More <p className='arrow-icon'><LuArrowUpRight className='ml-2 text-[20px] transform transition-transform duration-300 ease-in-out group-hover:rotate-[15deg]' /></p></button></a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;