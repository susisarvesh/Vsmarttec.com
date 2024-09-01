import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LuArrowUpRight } from 'react-icons/lu';

const AboutFounder = () => {
  gsap.registerPlugin(ScrollTrigger);

  // Set up the animation
  React.useLayoutEffect(() => {
    gsap.from(".text-slide-in", {
      x: -100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".text-slide-in",
        start: "top 80%", // Animation starts when the top of the element reaches 80% of the viewport height
        toggleActions: "play none none reverse", // Replay animation on enter, reverse on leave
      },
    });

    // Animation for logos
    gsap.from(".logo-slide-in", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".logo-slide-in",
        start: "top 90%", // Animation starts when the top of the element reaches 90% of the viewport height
        toggleActions: "play none none reverse", // Replay animation on enter, reverse on leave
      },
    });
  }, []);

  // Array of logos
  const logos = [
    {
      src: "https://ik.imagekit.io/zhf0gkzac/VSmart/isocertificate.png?updatedAt=1725023101673",
      alt: "iso_certificate_vsmart",
      },
       {
      src: "https://ik.imagekit.io/zhf0gkzac/VSmart/vsmartawards/nisc.png?updatedAt=1725181842429",
      alt: "nisc_vsmart",
      },
        {
      src: "https://ik.imagekit.io/zhf0gkzac/VSmart/vsmartawards/esai.jpeg?updatedAt=1725182313099",
      alt: "esai_certificate_vsmart",
    },
     {
      src: "https://ik.imagekit.io/zhf0gkzac/VSmart/vsmartcompanies/msmse.jpeg?updatedAt=1724594548803",
      alt: "msme_vsmart",
    },
  ];

  return (
    <div className="text-customBlue p-6 md:p-10 lg:p-20 flex flex-col rounded-lg m-4">
      <div className="flex flex-col lg:flex-row-reverse justify-between items-center">
        <div className="lg:w-1/2">
          <img
            src="https://ik.imagekit.io/zhf0gkzac/VSmart/vsmartabout.jpg?updatedAt=1725023014679"
            alt="Founders"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-1/2 lg:mr-10 mt-8 lg:mt-0">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-light leading-normal text-slide-in">
            Empowering <span className="text-orange-500">Industries with Innovative ,</span> Integrated Security and Operational Solutions.
          </h2>
          <h3 className="mt-6 md:mt-8 text-base md:text-lg lg:text-lg text-customBlue text-slide-in">
            At Vsmart, we provide integrated security solutions across various industries, focusing on exceptional service and operational excellence. Our innovative products enhance client operations, addressing inefficiencies and streamlining processes. By understanding each client's unique needs, we deliver customized solutions, establishing ourselves as trusted partners in security and video management.
          </h3>
          <button className='bg-blue-800 mt-5 text-white rounded-md p-2 hidden lg:flex items-center group'>
            Get in touch
            <p className='arrow-icon'>
              <LuArrowUpRight className='ml-2 text-[20px] transform transition-transform duration-300 ease-in-out group-hover:rotate-[15deg]' />
            </p>
          </button>
        </div>
      </div>
      <div className="lg:w-full mt-10 lg:mt-20">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-center">
          We are proud to be awarded & known by
        </h3>
        <div className="mt-8 md:mt-12 flex justify-center lg:justify-center flex-wrap gap-10 md:gap-40 lg:gap-50">
          {logos.map((logo, index) => (
            <div key={index} className="flex flex-col items-center logo-slide-in">
              <img src={logo.src} alt={logo.alt} className="h-20 md:h-15 lg:h-20"/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutFounder;
