import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { LuArrowUpRight } from 'react-icons/lu';
import { Link } from 'react-router-dom'; // Import the Link component


const Solutions = () => {
    const steps = [
        {
            number: '1',
            title: 'Electronic Security Systems',
            description: 'We begin by understanding your business requirements through in-depth discussions. This allows us to identify your critical needs and challenges, ensuring our solutions align with your goals.',
            backgroundImage: 'url(https://ik.imagekit.io/zhf0gkzac/VSmart/vsmartsolutions/lock.jpg?updatedAt=1726389396000)',
            href:"/electronic-security-systems"
        },
        {
            number: '2',
            title: 'Physical Security',
            description: 'Based on our initial discussions, we develop a customized proposal that outlines the plan of action, including cost estimates and timelines. This proposal serves as a roadmap to ensure clarity and alignment on project objectives.',
            backgroundImage: 'url(https://ik.imagekit.io/zhf0gkzac/VSmart/vsmartsolutions/physical%20security.jpg?updatedAt=1726386306617)',
             href:"/physical-security"// Add the background image URL here
        },
        {
            number: '3',
            title: 'Smart Building Automation',
            description: 'Leveraging our deep industry knowledge, we devise a strategy tailored to your business needs. This phase involves conceptualizing innovative products and solutions that effectively bridge the gap between your physical and digital operations.',
            backgroundImage: 'url(https://ik.imagekit.io/zhf0gkzac/VSmart/vsmartsolutions/lightning.jpg?updatedAt=1726388949115)', // Add the background image URL here
            href:"smart-building-automation-"
        },  
        {
            number: '4',
            title: 'Audio-Visual Innovations',
            description: 'Our skilled team designs and develops the solutions using cutting-edge technologies. This stage involves the actual creation and integration of the solution into your business processes, ensuring a seamless and efficient implementation.',
            backgroundImage: 'url(https://ik.imagekit.io/zhf0gkzac/VSmart/vsmartsolutions/tv.jpg?updatedAt=1726390495153)',
            // Add the background image URL here
        },
        {
            number: '5',
            title: 'Fire Safety & Emergency',
            description: 'Once the solution is ready, we coordinate with you to launch and implement it in your operations. Post-delivery, we provide ongoing support and maintenance to ensure the solution continues to meet your evolving needs.',
            backgroundImage: 'url(https://ik.imagekit.io/zhf0gkzac/VSmart/vsmartsolutions/alarm3d.jpg?updatedAt=1726389206080)' // Add the background image URL here
        },
    ];

    const sectionRef = useRef(null);

    useEffect(() => {
        // Register GSAP plugin
        gsap.registerPlugin(ScrollTrigger);

        // Get all grid items inside the section
        const elements = sectionRef.current.querySelectorAll('.process-step');

        // Apply animation to each element
        gsap.from(elements, {
            y: 50,
            opacity: 0,
            duration: 2,
            stagger: 0.2,
            ease: 'power4.out',
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play reverse play reverse',
                markers: false,
            },
        });
    }, []);

    return (
        <div ref={sectionRef} className="w-7xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 items-center lg:grid-cols-2 gap-4">
                <h2 className="text-4xl font-semibold mb-6 text-customBlue">Our Solutions</h2>
                <p className="mb-8 text-gray-600 md:text-lg lg:text-lg">
                At Vsmart, we provide integrated security solutions across various industries, focusing on exceptional service and operational excellence. Our innovative products enhance client operations, addressing inefficiencies and streamlining processes. 
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {steps.map((step, index) => (
                 <a
                        key={index}
                        href={`/${step.title.toLowerCase().replace(/\s+/g, '-')}`} // Dynamically create the route
                    

                        className={`process-step bg-white rounded-lg p-6 shadow-md flex flex-col items-start justify-between transition-shadow duration-300 hover:shadow-[0_2px_35px_rgb(21.2%,34.9%,78.8%)] ${
                            index === 0 ? 'lg:col-span-1' : ''
                        } ${index === 2 ? 'md:col-span-3 lg:col-span-1 lg:row-span-3' : ''} ${index > 2 ? 'md:col-span-1 lg:row-span-2' : ''}`}
                        style={{
                            minHeight: index >= 0 ? '280px' : 'auto',
                            position: 'relative',
                            backgroundImage: step.backgroundImage,
                            backgroundSize: '250px',
                            backgroundPosition: 'bottom right',
                            backgroundRepeat:'no-repeat',
                            overflow: 'hidden'
                        }}
                    >
                        <div className="absolute inset-0 opacity-0 z-0"></div> {/* Overlay to darken background */}
                        <div className="relative z-10 flex flex-wrap">
                            
                            <h3 className="text-2xl font-semibold mb-2 text-customBlue lg:text-2xl">{step.title}</h3>
                       
                        </div>
                        {/* <div className="relative z-10">
                            <p className="text-gray-700 md:text-lg lg:text-lg">{step.description}</p>
                        </div> */}
                         <div className="flex justify-end">
                                  <button className='bg-blue-800 text-white rounded-md p-2 lg:flex items-center group'><p className='arrow-icon'><LuArrowUpRight className='ml-0 text-[20px] transform transition-transform duration-300 ease-in-out group-hover:rotate-[15deg]' /></p></button>
                            </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Solutions;
