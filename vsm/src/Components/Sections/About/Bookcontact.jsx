import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Bookcontact = () => {
    // Create a reference to the component
    const sectionRef = useRef(null);

    useEffect(() => {
        const element = sectionRef.current;

        gsap.fromTo(
            element,
            { opacity: 0, y: 50 }, // Start state: hidden and moved 50px down
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 80%', // Animation starts when the top of the element reaches 80% of the viewport height
                    end: 'bottom 20%', // Animation ends when the bottom of the element reaches 20% of the viewport height
                    scrub: 1, // Smooth scroll
                },
            }
        );
    }, []);

    return (
        <div
            ref={sectionRef}
            className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 lg:gap-0 px-6 lg:px-16 py-12"
        >
            <div className="lg:w-2/2 text-center lg:text-left">
                <h2 className="text-4xl lg:text-5xl font-light text-gray-400 leading-snug">
                    Ready to showcase your <br /> values?{' '}
                    <span className="text-customBlue">
                        Let
                        <span className="text-orange-500">’</span>s start with a conversation.
                    </span>
                </h2>
            </div>

            <div className="flex flex-col items-center md:items-end md:w-1/2">
                <p className="text-customBlue text-lg mb-6 text-center md:text-left max-w-lg">
                    We’re now accepting applications for skilled professionals to join our team! Contact us to explore how we can work together and bring your vision to life.
                </p>
                <div className="flex flex-col md:flex-row items-center md:items-center space-y-4 md:space-y-0 md:space-x-4 w-full justify-center">
                    <a href="/careers"><button
                        aria-label="Book a free discovery call"
                        className="bg-customBlue text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-300"
                    >
                        Visit Careers →
                    </button></a>
                </div>
            </div>
        </div>
    );
};

export default Bookcontact;
