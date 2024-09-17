import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    videoSrc: "https://ik.imagekit.io/zhf0gkzac/VSmart/vsmartmp4/security%20cctv%20camera.mov/ik-video.mp4?updatedAt=1725186352879",
    title: "Advanced Security & Surveillance  Cutting Edge Protection for Your Space",
    description: "Protect your spaces with our sophisticated CCTV systems. Featuring globally recognized cameras and advanced recorders, our solutions ensure early threat detection and provide clear evidence of any incidents. Enjoy peace of mind with reliable security, no matter where you are.",
  },
    {
    videoSrc: "https://ik.imagekit.io/zhf0gkzac/VSmart/vsmartmp4/software%20service%20(1).mp4?updatedAt=1725186141920",
    title: "Innovative Software Solutions & Tailored Technology for Your Needs",
    description: "Leverage our expertise in software application development to receive tailored solutions for E-Learning, E-Commerce, Mobile Apps, 3D Animation, application redesign, Content Management Systems, and Custom Database Applications. We deliver innovative and customized software to meet your specific needs.",
  },
      {
    videoSrc: "https://ik.imagekit.io/zhf0gkzac/VSmart/vsmartmp4/problem%20solving%20vsmart.mp4?updatedAt=1725185801351",
    title: "Tailored Custom Services Personalized Solutions for Every Need",
    description: "With over 6 years of experience, VSMART provides top-notch product and technical support for corporate and government clients. Our certified team ensures first-call resolution and exceptional customer service for a wide range of products and services.",
  }
  // Additional slides...
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 4500); // 5-second interval for better readability
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[500px] flex flex-col justify-center items-start rounded-[20px] m-3 overflow-hidden lg:h-[75vh]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
        >
          <video 
            className="absolute top-0 left-0 w-full h-full object-cover" 
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src={slide.videoSrc} type="video/mp4" />
          </video>
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          <div className="relative z-10 max-w-4xl p-4 lg:p-12 text-white mb-96">
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-poppins">
              {slide.title}
            </h1>
          </div>
          <div className="absolute right-0 bottom-0 max-w-3xl p-4 lg:p-12 text-white mb-4">
            <p className="text-base md:text-[19px] lg:text-lg text-gray-300">
              {slide.description}
            </p>
            <a href="/contact"><button className="mt-8 bg-white text-black py-3 px-6 rounded-lg text-sm md:text-base lg:text-lg font-semibold flex items-center">
              Book a free discovery call <span className="ml-2">→</span>
            </button></a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Hero;
