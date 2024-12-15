import React, { useEffect } from "react";
import { gsap } from "gsap";

const VideoWall = () => {
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
            Transforming Spaces with Vsmart's Video Wall Solutions
          </h3>

          <div className="flex flex-wrap gap-4 mt-3 mb-3 p-2">
            <div className="px-4 py-2 bg-gray-200 text-gray-700 font-medium rounded-full text-sm sm:text-base">
              High Resolution Displays
            </div>
            <div className="px-4 py-2 bg-gray-200 text-gray-700 font-medium rounded-full text-sm sm:text-base">
              Customizable Sizes & Configurations
            </div>
            <div className="px-4 py-2 bg-gray-200 text-gray-700 font-medium rounded-full text-sm sm:text-base">
              Real-Time Data & Video Feeds
            </div>
          </div>

          <div className="text-gray-700 p-1 text-sm sm:text-base lg:text-lg leading-relaxed mb-2 lg:p-4">
            <p>
              Vsmart’s video wall solutions deliver powerful, high-impact visual displays by seamlessly integrating multiple screens or panels into a unified and cohesive presentation. Designed for mission-critical environments such as command centers, control rooms, and public information hubs, our video walls provide exceptional resolution and can be tailored to meet various size and configuration requirements. With support for dynamic content, including real-time data visualization, video streams, and interactive presentations, Vsmart’s solutions enhance information clarity and foster effective decision-making through engaging and immersive experiences.
            </p>
            <p className="mt-4 hidden lg:block">
              They support a variety of content, including real-time data, video feeds, and interactive presentations, delivering a dynamic and engaging experience that enhances information visibility and supports effective decision-making.
            </p>
          </div>
        </div>

        {/* Other Images */}
        <div className="grid-item col-span-1 sm:col-span-2 lg:col-span-2 xl:col-span-2 p-1 rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 md:grid-cols-2 ">
            <div className="bg-gray-300 rounded-lg overflow-hidden">
              <img
                src="https://www.appliedglobal.com/wp-content/uploads/How-to-Create-a-Modern-Meeting-Room-Setup.png"
                alt="Video Wall Image 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-gray-300 rounded-lg overflow-hidden">
                <img
                  src="https://www.appliedglobal.com/wp-content/uploads/How-to-Create-a-Modern-Meeting-Room-Setup.png"
                  alt="Video Wall Image 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gray-300 rounded-lg overflow-hidden">
                <img
                  src="https://www.appliedglobal.com/wp-content/uploads/How-to-Create-a-Modern-Meeting-Room-Setup.png"
                  alt="Video Wall Image 3"
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

export default VideoWall;
