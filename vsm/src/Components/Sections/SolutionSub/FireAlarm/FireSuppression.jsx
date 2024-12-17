import { useEffect } from "react";
import { gsap } from "gsap";

const FireSuppression = () => {
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
            Protecting Lives and Property with Fire Suppression Systems
          </h3>

          <div className="flex flex-wrap gap-4 mt-3 mb-3 p-2">
            <div className="px-4 py-2 bg-gray-200 text-gray-700 font-medium rounded-full text-sm sm:text-base">
              Water and Foam Systems
            </div>
            <div className="px-4 py-2 bg-gray-200 text-gray-700 font-medium rounded-full text-sm sm:text-base">
              Gas and Chemical Agents
            </div>
            <div className="px-4 py-2 bg-gray-200 text-gray-700 font-medium rounded-full text-sm sm:text-base">
              Advanced Clean Agent Systems
            </div>
          </div>

          <div className="text-gray-700 p-1 text-sm sm:text-base lg:text-lg leading-relaxed mb-2 lg:p-4">
            <p>
              Vsmart provides state-of-the-art fire suppression systems designed to control and extinguish fires, protecting people, property, and assets. Our systems utilize various methods including water, foam, gas, and chemical agents—to suppress flames and cool affected areas.
            </p>
            <p className="mt-4 hidden lg:block">
              From traditional sprinkler systems to advanced clean agent systems, Vsmart's fire suppression solutions are crucial for minimizing damage and ensuring safety across buildings, industrial sites, and other facilities. These systems are designed to respond quickly to fire hazards, protecting valuable assets and saving lives.
            </p>
          </div>
        </div>

        {/* Other Images */}
        <div className="grid-item col-span-1 sm:col-span-2 lg:grid-cols-2 xl:grid-cols-2 p-1 rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 md:grid-cols-2">
            <div className="bg-gray-300 rounded-lg overflow-hidden">
              <img
                src="https://ik.imagekit.io/zhf0gkzac/VSmart/vssolutionimages/Fire%20Suppression%201.webp?updatedAt=1734333645093"
                alt="Fire Suppression 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-gray-300 rounded-lg overflow-hidden">
                <img
                  src="https://ik.imagekit.io/zhf0gkzac/VSmart/vssolutionimages/Fire%20Suppression%202.webp?updatedAt=1734333634500"
                  alt="Fire Suppression 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gray-300 rounded-lg overflow-hidden">
                <img
                  src="https://ik.imagekit.io/zhf0gkzac/VSmart/vssolutionimages/Fire%20Suppression%203.webp?updatedAt=1734333634059"
                  alt="Fire Suppression 3"
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

export default FireSuppression;
