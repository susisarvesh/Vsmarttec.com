import { useEffect } from "react";
import { gsap } from "gsap";

const IntegratedVideo = () => {
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
            Strengthening Security with Video Surveillance Solutions
          </h3>

          <div className="flex flex-wrap gap-4 mt-3 mb-3 p-2">
            <div className="px-4 py-2 bg-gray-200 text-gray-700 font-medium rounded-full text-sm sm:text-base">
              Real-Time Video Streaming
            </div>
            <div className="px-4 py-2 bg-gray-200 text-gray-700 font-medium rounded-full text-sm sm:text-base">
              Motion Detection
            </div>
            <div className="px-4 py-2 bg-gray-200 text-gray-700 font-medium rounded-full text-sm sm:text-base">
              Advanced Analytics Integration
            </div>
          </div>

          <div className="text-gray-700 p-1 text-sm sm:text-base lg:text-lg leading-relaxed mb-2 lg:p-4">
            <p>
              Vsmart’s integrated video surveillance systems offer a comprehensive network for enhanced monitoring and security. Our solutions combine multiple video cameras, recording devices, and advanced software, allowing for seamless real-time video streaming, recording, and playback from various locations all managed through a unified interface.
            </p>
            <p className="mt-4 hidden lg:block">
              With features like motion detection, remote access, and advanced analytics, our systems can detect unusual activities and events, integrating with alarms and access control systems to provide a holistic approach to safeguarding your premises.
            </p>
          </div>
        </div>

        {/* Other Images */}
        <div className="grid-item col-span-1 sm:col-span-2 lg:grid-cols-2 xl:grid-cols-2 p-1 rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 md:grid-cols-2">
            <div className="bg-gray-300 rounded-lg overflow-hidden">
              <img
                src="https://ik.imagekit.io/zhf0gkzac/VSmart/vssolutionimages/integrated%20video%20surveillance%20systems%201.jpg?updatedAt=1734333638677"
                alt="Integrated Video 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-gray-300 rounded-lg overflow-hidden">
                <img
                  src="https://ik.imagekit.io/zhf0gkzac/VSmart/vssolutionimages/integrated%20video%20surveillance%20systems%202.jpg?updatedAt=1734333645388"
                  alt="Integrated Video 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gray-300 rounded-lg overflow-hidden">
                <img
                  src="https://ik.imagekit.io/zhf0gkzac/VSmart/vssolutionimages/integrated%20video%20surveillance%20systems%203.jpg?updatedAt=1734333640222"
                  alt="Integrated Video 3"
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

export default IntegratedVideo;
