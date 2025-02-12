import  { useEffect } from "react";
import { gsap } from "gsap";

const PhysicalIdentity = () => {
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
            Securing Access with Physical Identity Solutions
          </h3>

          <div className="flex flex-wrap gap-4 mt-3 mb-3 p-2">
            <div className="px-4 py-2 bg-gray-200 text-gray-700 font-medium rounded-full text-sm sm:text-base">
              Smart Cards & Biometric Scanners
            </div>
            <div className="px-4 py-2 bg-gray-200 text-gray-700 font-medium rounded-full text-sm sm:text-base">
              User Authentication
            </div>
            <div className="px-4 py-2 bg-gray-200 text-gray-700 font-medium rounded-full text-sm sm:text-base">
              Access Control Management
            </div>
          </div>

          <div className="text-gray-700 p-1 text-sm sm:text-base lg:text-lg leading-relaxed mb-2 lg:p-4">
            <p>
              Vsmart’s physical identity and access systems offer robust solutions for managing and securing entry to physical spaces. Utilizing advanced technologies such as smart cards, biometric scanners (fingerprints, retina scans), and keypads, these systems verify and authenticate users to control access to restricted areas.
            </p>
            <p className="mt-4 hidden lg:block">
              By tracking entries and exits in real time, Vsmart’s systems significantly enhance security by ensuring that only authorized individuals can access sensitive locations. Each entry or exit is logged and monitored, creating a comprehensive audit trail that can be reviewed to identify anomalies, unauthorized attempts, or suspicious activity. This level of transparency not only bolsters security protocols but also improves operational efficiency by automating access management.
            </p>
          </div>
        </div>

        {/* Other Images */}
        <div className="grid-item col-span-1 sm:col-span-2 lg:grid-cols-2 xl:grid-cols-2 p-1 rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 md:grid-cols-2">
            <div className="bg-gray-300 rounded-lg overflow-hidden">
              <img
                src="https://ik.imagekit.io/zhf0gkzac/VSmart/vssolutionimages/Physical%20Identity%20Solutions%201.jpg?updatedAt=1734333653638"
                alt="Physical Identity 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-gray-300 rounded-lg overflow-hidden">
                <img
                  src="https://ik.imagekit.io/zhf0gkzac/VSmart/vssolutionimages/Physical%20Identity%20Solutions%202.jpg?updatedAt=1734333652179"
                  alt="Physical Identity 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gray-300 rounded-lg overflow-hidden">
                <img
                  src="https://ik.imagekit.io/zhf0gkzac/VSmart/vssolutionimages/Physical%20Identity%20Solutions%203.webp?updatedAt=1734333651889"
                  alt="Physical Identity 3"
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

export default PhysicalIdentity;
