import React, { useEffect } from "react";
import { gsap } from "gsap";

const LidarSystem = () => {
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
            Advanced Perimeter Security with LiDAR and OFC-based Detection Systems
          </h3>

          <div className="flex flex-wrap gap-4 mt-3 mb-3 p-2">
            <div className="px-4 py-2 bg-gray-200 text-gray-700 font-medium rounded-full text-sm sm:text-base">
              LiDAR Technology
            </div>
            <div className="px-4 py-2 bg-gray-200 text-gray-700 font-medium rounded-full text-sm sm:text-base">
              Optical Fibre Cable (OFC)
            </div>
            <div className="px-4 py-2 bg-gray-200 text-gray-700 font-medium rounded-full text-sm sm:text-base">
              Perimeter Monitoring
            </div>
          </div>

          <div className="text-gray-700 p-1 text-sm sm:text-base lg:text-lg leading-relaxed mb-2 lg:p-4">
            <p>
              Vsmart’s LiDAR and optical fibre cable (OFC)-based intrusion detection systems offer cutting-edge solutions for advanced perimeter security. LiDAR systems employ laser pulses to generate precise 3D maps of the monitored area, enabling accurate intrusion detection and tracking. 
            </p>
            <p className="mt-4 hidden lg:block">
              In addition, our OFC-based systems utilize optical fibers embedded along fences or perimeters to detect disturbances or vibrations. These disturbances are analyzed to identify potential breaches, providing real-time, accurate detection that ensures enhanced security for sensitive or high-risk areas.
            </p>
          </div>
        </div>

        {/* Other Images */}
        <div className="grid-item col-span-1 sm:col-span-2 lg:grid-cols-2 xl:grid-cols-2 p-1 rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 md:grid-cols-2">
            <div className="bg-gray-300 rounded-lg overflow-hidden">
              {/* https://ik.imagekit.io/zhf0gkzac/VSmart/vssolutionimages/Lider%20System%203.webp?updatedAt=1734333650099 */}
              <img
                src="https://ik.imagekit.io/zhf0gkzac/VSmart/vssolutionimages/Lider%20System%203.webp?updatedAt=1734333650099"
                alt="LiDAR System 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-gray-300 rounded-lg overflow-hidden">
                <img
                  src="https://ik.imagekit.io/zhf0gkzac/VSmart/vssolutionimages/Lider%20System%202?updatedAt=1734333648415"
                  alt="LiDAR System 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gray-300 rounded-lg overflow-hidden">
                <img
                  src="https://ik.imagekit.io/zhf0gkzac/VSmart/vssolutionimages/Lider%20System%201.webp?updatedAt=1734333647648"
                  alt="LiDAR System 3"
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

export default LidarSystem;
