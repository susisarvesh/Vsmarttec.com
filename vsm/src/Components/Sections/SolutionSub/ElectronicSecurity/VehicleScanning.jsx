import { useEffect } from "react";
import { gsap } from "gsap";

const VehicleScanning = () => {
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
            Enhancing Security with Vehicle Scanning Solutions
          </h3>

          <div className="flex flex-wrap gap-4 mt-3 mb-3 p-2">
            <div className="px-4 py-2 bg-gray-200 text-gray-700 font-medium rounded-full text-sm sm:text-base">
              Advanced Imaging Technologies
            </div>
            <div className="px-4 py-2 bg-gray-200 text-gray-700 font-medium rounded-full text-sm sm:text-base">
              Real Time Threat Detection
            </div>
            <div className="px-4 py-2 bg-gray-200 text-gray-700 font-medium rounded-full text-sm sm:text-base">
              Enhanced Security
            </div>
          </div>

          <div className="text-gray-700 p-1 text-sm sm:text-base lg:text-lg leading-relaxed mb-2 lg:p-4">
            <p>
              Vsmart’s Under vehicle scanning solutions utilize advanced imaging technologies, such as X-rays or high-resolution cameras, to inspect the underside of vehicles for security purposes. Installed at checkpoints or secure entry points, these systems detect hidden threats such as explosives, contraband, or concealed compartments.
            </p>
            <p className="mt-4 hidden lg:block">
              Vsmart’s cutting-edge solutions revolutionize safety and security in high-risk environments by offering real-time analysis, detection, and alerts. Designed with precision and powered by advanced technologies such as AI-driven object recognition, machine learning, and integrated IoT systems, Vsmart’s solutions ensure that unauthorized, suspicious, or dangerous items are quickly identified and prevented from entering sensitive areas.

            </p>
            <p className="mt-4 hidden lg:block">In high-security environments such as airports, government buildings, data centers, and military facilities, even the slightest lapse can have severe consequences. Vsmart provides robust tools to minimize these risks by enabling automated threat detection, instantaneous notifications, and proactive decision-making. The system is capable of identifying items like weapons, explosives, contraband, or other hazardous materials with unparalleled accuracy, while also reducing the risk of human error.</p>
          </div>
        </div>

        {/* Other Images */}
        <div className="grid-item col-span-1 sm:col-span-2 lg:grid-cols-2 xl:grid-cols-2 p-1 rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 md:grid-cols-2">
            <div className="bg-gray-300 rounded-lg overflow-hidden">
              <img
                src="https://ik.imagekit.io/zhf0gkzac/VSmart/vssolutionimages/Vehicle%20Scanning%20Solutions%201.webp?updatedAt=1734333655482"
                alt="Vehicle Scanning 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-gray-300 rounded-lg overflow-hidden">
                <img
                  src="https://ik.imagekit.io/zhf0gkzac/VSmart/vssolutionimages/Vehicle%20Scanning%20Solutions%202.webp?updatedAt=1734333656311"
                  alt="Vehicle Scanning 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gray-300 rounded-lg overflow-hidden">
                <img
                  src="https://ik.imagekit.io/zhf0gkzac/VSmart/vssolutionimages/Vehicle%20Scanning%20Solutions%203.jpg?updatedAt=1734333658060"
                  alt="Vehicle Scanning 3"
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

export default VehicleScanning;
