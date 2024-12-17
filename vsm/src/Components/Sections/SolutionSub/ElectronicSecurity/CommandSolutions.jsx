import { useEffect } from "react";
import { gsap } from "gsap";

const CommandSolutions = () => {
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
            Enhancing Efficiency with Vsmart's Command and Control Solutions
          </h3>

          <div className="flex flex-wrap gap-4 mt-3 mb-3 p-2">
            <div className="px-4 py-2 bg-gray-200 text-gray-700 font-medium rounded-full text-sm sm:text-base">
              Real-Time Situational Awareness
            </div>
            <div className="px-4 py-2 bg-gray-200 text-gray-700 font-medium rounded-full text-sm sm:text-base">
              Multi-Team Coordination
            </div>
            <div className="px-4 py-2 bg-gray-200 text-gray-700 font-medium rounded-full text-sm sm:text-base">
              Critical Decision-Making Support
            </div>
          </div>

          <div className="text-gray-700 p-1 text-sm sm:text-base lg:text-lg leading-relaxed mb-2 lg:p-4">
            <p>
              Vsmart’s Command and Control systems provide a centralized platform for managing and coordinating complex operations, including emergency responses. These systems integrate various data sources such as video feeds, sensor inputs, and communication tools into a unified interface.
            </p>
            <p className="mt-4 hidden lg:block">
              Designed for critical environments like control rooms and emergency response centers, Vsmart’s solutions enable real-time situational awareness, support swift decision-making, and enhance coordination across multiple teams, thereby improving operational efficiency and response times in high-stakes situations.
            </p>
          </div>
        </div>

        {/* Other Images */}
        <div className="grid-item col-span-1 sm:col-span-2 lg:grid-cols-2 xl:grid-cols-2 p-1 rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 md:grid-cols-2">
            <div className="bg-gray-300 rounded-lg overflow-hidden">
              <img
                src="https://ik.imagekit.io/zhf0gkzac/VSmart/vssolutionimages/Comand%20And%20Control%201.jpg?updatedAt=1734333659128"
                alt="Command Solutions 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-gray-300 rounded-lg overflow-hidden">
                <img
                  src="https://ik.imagekit.io/zhf0gkzac/VSmart/vssolutionimages/Comand%20And%20Control%202.jpg?updatedAt=1734333602360"
                  alt="Command Solutions 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gray-300 rounded-lg overflow-hidden">
                <img
                  src="https://ik.imagekit.io/zhf0gkzac/VSmart/vssolutionimages/Comand%20And%20Control%203.jpg?updatedAt=1734333602365"
                  alt="Command Solutions 3"
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

export default CommandSolutions;
