import React, { useEffect } from "react";
import { gsap } from "gsap";

const MeetingRoom = () => {
  useEffect(() => {
    // GSAP Animation
    gsap.fromTo(
      ".grid-item",
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <div className="flex items-start justify-center rounded-lg p-2 bg-gradient-to-r from-blue-300 via-blue-200 to-blue-400">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 auto-rows-auto">
        
        {/* Text Container */}
        <div className="grid-item col-span-1 sm:col-span-2 lg:col-span-2 xl:col-span-2 bg-white rounded-lg shadow-2xl p-6 flex flex-col items-start min-h-full">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-normal text-customBlue mb-4">
            Redefining Collaboration with Advanced Meeting Room Solutions
          </h3>

          <div className="flex flex-wrap gap-4 mt-3 mb-3 p-2">
            <div className="px-4 py-2 bg-gray-200 text-gray-700 font-medium rounded-full text-sm sm:text-base">
              Screen Sharing
            </div>
            <div className="px-4 py-2 bg-gray-200 text-gray-700 font-medium rounded-full text-sm sm:text-base">
              Interactive Digital Whiteboards
            </div>
            <div className="px-4 py-2 bg-gray-200 text-gray-700 font-medium rounded-full text-sm sm:text-base">
              Centralized Controls for Lighting 
            </div>
          </div>

          <div className="text-gray-700 p-1 text-sm sm:text-base lg:text-lg leading-relaxed mb-2 lg:p-4">
            <p>
              At Vsmart, we specialize in providing advanced meeting room and video conferencing solutions that empower seamless collaboration, whether your team is onsite or connecting remotely. Our comprehensive offerings include cutting-edge audio-visual equipment, such as high-definition cameras, crystal-clear microphones, and premium speakers, all paired with robust video conferencing software to ensure a smooth and reliable communication experience.
            </p>
            <p className="mt-4 hidden lg:block">
              Key features such as screen sharing, interactive digital whiteboards, and centralized controls for lighting and climate enhance meeting efficiency and productivity. By combining innovative technologies with user-centric design, Vsmart creates an inclusive, immersive meeting experience that connects participants effortlessly, regardless of their location.
            </p>
          </div>
        </div>

        {/* Other Images */}
        <div className="grid-item col-span-1 sm:col-span-2 lg:col-span-2 xl:col-span-2 p-1 rounded-lg overflow-hidden">
  <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 md:grid-cols-2 ">
    <div className="bg-gray-300 rounded-lg overflow-hidden">
      <img
        src="https://www.appliedglobal.com/wp-content/uploads/How-to-Create-a-Modern-Meeting-Room-Setup.png"
        alt="Image 2"
        className="w-full h-full object-cover"
      />
            </div>
            <div className="grid grid-cols-1 gap-4  ">
    <div className="bg-gray-300 rounded-lg overflow-hidden">
      <img
        src="https://www.appliedglobal.com/wp-content/uploads/How-to-Create-a-Modern-Meeting-Room-Setup.png"
        alt="Image 3"
        className="w-full h-full object-cover"
              />
              
            </div>
            <div className="bg-gray-300 rounded-lg overflow-hidden">
      <img
        src="https://ascentae.com/wp-content/uploads/fkSpNgdSFZZTTNHnH8EAs3-970-80.png-e1704797154455.webp"
        alt="Image 4"
        className="w-full h-full object-cover"
      />
              </div>
              </div>
            
    
  </div>
</div>


      </div>
    </div>
  );
};

export default MeetingRoom;
