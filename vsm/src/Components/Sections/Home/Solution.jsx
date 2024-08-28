import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LuArrowUpRight } from 'react-icons/lu';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        id: 1,
        title: "Integrated Security Solutions",
        description: "We design and deploy tailored, end-to-end security systems that protect against emerging threats, covering everything from advanced video surveillance and access control to intrusion detection, so you can focus on your core business.",
        tags: ["Audio – Visual", "Building Automation", "Electronic Security Solutions", "Physical security solutions"],
        image: "https://ik.imagekit.io/zhf0gkzac/VSmart/vsmartdelivery/camera-vsmart.jpg?updatedAt=1724778921738",
        hoverImage: "https://ik.imagekit.io/zhf0gkzac/VSmart/vsmartdelivery/vsmartaccess-control.jpg?updatedAt=1724778921745",
        heightClass: "h-auto",
        containerClass: "row-span-1",
    },
    {
        id: 2,
        title: "Customized Software Development",
        description: "Our expertise in software application development allows us to create tailored solutions, including e-learning and e-commerce platforms, mobile apps, 3D animation, application redesign, content management systems, and custom database applications, ensuring innovative and efficient digital experiences.",
        tags:["Software Developement", "UI/UX Design", "Web Solution", "Machine Learning"],
        image: "https://ik.imagekit.io/zhf0gkzac/VSmart/vsmartdelivery/steptodown.com931565.jpg?updatedAt=1724829385901",
        hoverImage: "https://ik.imagekit.io/zhf0gkzac/VSmart/vsmartdelivery/steptodown.com627655.jpg?updatedAt=1724829385777",
        heightClass: "h-auto",
        containerClass: "row-span-1",
    },
];

const Solution = () => {
    const firstGridRef = useRef(null);
    const projectRefs = useRef([]);

    useEffect(() => {
        // Animate the first grid
        if (firstGridRef.current) {
            gsap.fromTo(
                firstGridRef.current,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: firstGridRef.current,
                        start: 'top 85%',
                        end: 'top 60%',
                        toggleActions: 'play none none reverse',
                        scrub: 0.5,
                    },
                }
            );
        }

        // Animate the project grids in sequence
        projectRefs.current.forEach((ref, index) => {
            if (ref) {
                gsap.fromTo(
                    ref,
                    { y: 100, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.5,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: ref,
                            start: 'top 85%',
                            end: 'top 60%',
                            toggleActions: 'play none none reverse',
                            scrub: 0.5,
                            delay: index * 0.3,
                        },
                    }
                );
            }
        });
    }, []);

    return (
        <div className="px-2 py-10 md:px-3 lg:px-2 cursor-pointer font-poppins">
            {/* First Grid */}
            <div ref={firstGridRef} className="grid grid-cols-1 lg:grid-cols-2 items-center mb-3 gap-4">
                <div className='text-[28px] md:text-[37px] lg:text-[48px] text-customBlue p-1 lg:p-3'>
                    Expert support for corporate and government clients <span className="text-orange-500">, ensuring exceptional service</span>.
                </div>
                <div className="text-customBlue text-[17px] lg:text-[20px] p-3">
                    Vsmart delivers custom security solutions, innovative software development, and expert support, ensuring your business is secure, efficient, and expertly managed with tailored technology and reliable service. We safeguard your operations and enhance efficiency with cutting-edge solutions and dedicated support.
                </div>
            </div>

            {/* Project Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-5">
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className={`border border-gray-300 rounded-lg p-4 group ${project.containerClass} `}
                        ref={(el) => (projectRefs.current[index] = el)}
                    >
                        <div className="relative">
                            <img
                                src={project.image}
                                alt={project.title}
                                className={`w-full h-auto object-cover rounded-md transition-opacity duration-300 ease-in-out group-hover:opacity-0 shadow-custom-shadow`}
                            />
                            <img
                                src={project.hoverImage}
                                alt={project.title}
                                className={`absolute inset-0 w-full h-auto object-cover rounded-md transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 shadow-custom-shadow`}
                            />
                        </div>
                        <div className="p-6">
                            <div className="mb-4 flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="bg-gray-200 text-gray-700 text-xs px-3 py-2 rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h3 className="text-4xl text-customBlue font-normal mb-6">{project.title}</h3>
                            <p className="text-customBlue text-base mb-4">{project.description}</p>
                            <div className="text-right">
                               <button 
    className="bg-customBlue text-white px-4 py-2 mt-5 rounded-md p-2 flex items-center lg:flex border-2 border-transparent group-hover:border-customBlue group-hover:bg-white group-hover:text-customBlue transition"
>
    View More 
    <p className="arrow-icon">
        <LuArrowUpRight className="ml-2 text-[20px] transform transition-transform duration-300 ease-in-out group-hover:rotate-[15deg]" />
    </p>
</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Solution;
