
function AboutHero() {
  return (
    <div className="relative h-auto rounded-[20px] flex flex-col justify-center items-start m-4 overflow-hidden">
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover" 
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src="https://ik.imagekit.io/zhf0gkzac/VSmart/vsmartmp4/about.mp4?updatedAt=1725077049351" type="video/mp4" />
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

      <div className="relative z-10 max-w-4xl p-4 lg:p-12 text-white mb-96">
        <h1 className="text-3xl md:text-5xl lg:text-7xl leading-tight font-poppins">
          Elevate <span className="text-gray-400">your startup's</span> success with our Webflow agency
        </h1>
      </div>

      <div className="absolute right-0 bottom-0 max-w-3xl p-4 lg:p-12 text-white mb-16">
        <p className="text-base lg:text-lg text-gray-300">
          We're a UK-based Webflow design agency focused on empowering startups, B2B, and fintech companies with an impactful online presence. We deliver high-quality, converting websites with impressive turnaround times.
        </p>
        <button className="mt-8 bg-white text-black py-3 px-6 rounded-full text-sm md:text-base lg:text-lg font-semibold flex items-center">
          Book a free discovery call <span className="ml-2">→</span>
        </button>
      </div>
    </div>
  );
}

export default AboutHero;






// import { useState, useEffect } from "react";

// const slides = [
//   {
//     videoSrc: "https://cdn.prod.website-files.com/66917f970aa31c65959816ce%2F6691813bb8a59b7a8a0f1b53_Neon-Glow-Abstract-Geometric-Design-2024-02-20-16-41-14-Utc-transcode.mp4",
//     title: "Elevate your startup's success with our Webflow agency",
//     description: "We're a UK-based Webflow design agency focused on empowering startups, B2B, and fintech companies with an impactful online presence. We deliver high-quality, converting websites with impressive turnaround times.",
//   },
//   {
//     videoSrc: "https://cdn.prod.website-files.com/66917f970aa31c65959816ce%2F6691813bb8a59b7a8a0f1b53_Neon-Glow-Abstract-Geometric-Design-2024-02-20-16-41-14-Utc-transcode.mp4",
//     title: "slide2",
//     description: "We're a UK-based Webflow design agency focused on empowering startups, B2B, and fintech companies with an impactful online presence. We deliver high-quality, converting websites with impressive turnaround times.",
//   },
//   {
//     videoSrc: "https://cdn.prod.website-files.com/66917f970aa31c65959816ce%2F6691813bb8a59b7a8a0f1b53_Neon-Glow-Abstract-Geometric-Design-2024-02-20-16-41-14-Utc-transcode.mp4",
//     title: "slide3",
//     description: "We're a UK-based Webflow design agency focused on empowering startups, B2B, and fintech companies with an impactful online presence. We deliver high-quality, converting websites with impressive turnaround times.",
//   },
//   {
//     videoSrc: "https://cdn.prod.website-files.com/66917f970aa31c65959816ce%2F6691813bb8a59b7a8a0f1b53_Neon-Glow-Abstract-Geometric-Design-2024-02-20-16-41-14-Utc-transcode.mp4",
//     title: "slide4",
//     description: "We're a UK-based Webflow design agency focused on empowering startups, B2B, and fintech companies with an impactful online presence. We deliver high-quality, converting websites with impressive turnaround times.",
//   },
//   // Additional slides...
// ];

// function Hero() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
//     }, 5000); // 5-second interval for better readability
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative h-[500px] flex flex-col justify-center items-start rounded-[20px] m-3 overflow-hidden">
//       {slides.map((slide, index) => (
//         <div
//           key={index}
//           className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
//         >
//           <video
//             className="absolute top-0 left-0 w-full h-full object-cover"
//             autoPlay
//             loop
//             muted
//             playsInline
//           >
//             <source src={slide.videoSrc} type="video/mp4" />
//           </video>
//           <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
//           <div className="relative z-10 max-w-4xl p-4 lg:p-12 text-white mb-96">
//             <h1 className="text-3xl md:text-5xl lg:text-7xl leading-tight font-poppins">
//               {slide.title}
//             </h1>
//           </div>
//           <div className="absolute right-0 bottom-0 max-w-3xl p-4 lg:p-12 text-white mb-16">
//             <p className="text-base lg:text-lg text-gray-300">
//               {slide.description}
//             </p>
//             <button className="mt-8 bg-white text-black py-3 px-6 rounded-full text-sm md:text-base lg:text-lg font-semibold flex items-center">
//               Book a free discovery call <span className="ml-2">→</span>
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Hero;