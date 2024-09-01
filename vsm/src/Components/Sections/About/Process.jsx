import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const Process = () => {
    const steps = [
        {
            number: '1',
            title: 'Scoping session',
            description: 'We begin by understanding your business requirements through in-depth discussions. This allows us to identify your critical needs and challenges, ensuring our solutions align with your goals.'
        },
        {
            number: '2',
            title: 'Proposal',
            description: 'Based on our initial discussions, we develop a customized proposal that outlines the plan of action, including cost estimates and timelines. This proposal serves as a roadmap to ensure clarity and alignment on project objectives.'
        },
        {
            number: '3',
            title: 'Strategy',
            description: 'Leveraging our deep industry knowledge, we devise a strategy tailored to your business needs. This phase involves conceptualizing innovative products and solutions that effectively bridge the gap between your physical and digital operations.'
        },
        {
            number: '4',
            title: 'Build',
            description: 'Our skilled team designs and develops the solutions using cutting-edge technologies. This stage involves the actual creation and integration of the solution into your business processes, ensuring a seamless and efficient implementation.'
        },
        {
            number: '5',
            title: 'Deliver',
            description: 'Once the solution is ready, we coordinate with you to launch and implement it in your operations. Post-delivery, we provide ongoing support and maintenance to ensure the solution continues to meet your evolving needs.'
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
                start: 'top 80%', // Start the animation when the top of the section is 80% from the top of the viewport
                end: 'bottom 20%', // End when the bottom of the section is 20% from the bottom of the viewport
                toggleActions: 'play none none reverse', // Play animation on entering, reverse on leaving
                markers: false, // Set to true for debugging
            },
        });
    }, []);

    return (
        <div ref={sectionRef} className="w-7xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 items-center lg:grid-cols-2 gap-4">
                <h2 className="text-4xl font-semibold mb-6 text-customBlue">Our Process</h2>
                <p className="mb-8 text-gray-600">At Vsmart, we believe in simplifying the complex. Our approach is designed to be efficient and effective, ensuring that each step of our process adds real value and drives innovation, while remaining transparent and easy to understand.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className={`process-step bg-white rounded-lg p-6 shadow-md flex flex-col items-start justify-between ${
                            index === 0 ? 'lg:col-span-2' : ''
                        } ${index === 2 ? 'md:col-span-3  lg:col-span-1 lg:row-span-2' : ''} ${index > 2 ? 'md:col-span-1 lg:row-span-2' : ''}`}
                        style={{
                            minHeight: index > 1 ? '250px' : 'auto' // Adjust the height for indices 3, 4, and 5
                        }}
                    >
                        <div>
                            <div className="flex items-center justify-center bg-orange-500 text-white w-8 h-8 rounded-full text-center mb-4">
                                {step.number}
                            </div>
                            <h3 className="text-2xl font-semibold mb-2 text-customBlue">{step.title}</h3>
                        </div>
                        <div>
                            <p className="text-gray-700">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Process;
