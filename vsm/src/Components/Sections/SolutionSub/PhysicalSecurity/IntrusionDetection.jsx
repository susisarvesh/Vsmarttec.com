import React, { useEffect } from "react";
import { gsap } from "gsap";

const IntrusionDetection = () => {
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
            Enhancing Security with Intrusion Detection Systems
          </h3>

          <div className="flex flex-wrap gap-4 mt-3 mb-3 p-2">
            <div className="px-4 py-2 bg-gray-200 text-gray-700 font-medium rounded-full text-sm sm:text-base">
              Cybersecurity Monitoring
            </div>
            <div className="px-4 py-2 bg-gray-200 text-gray-700 font-medium rounded-full text-sm sm:text-base">
              Physical Security Sensors
            </div>
            <div className="px-4 py-2 bg-gray-200 text-gray-700 font-medium rounded-full text-sm sm:text-base">
              Real-time Alerts
            </div>
          </div>

          <div className="text-gray-700 p-1 text-sm sm:text-base lg:text-lg leading-relaxed mb-2 lg:p-4">
            <p>
              Vsmart’s intrusion detection systems (IDS) are designed to detect and analyze activities for signs of unauthorized access or suspicious behavior. Our cybersecurity IDS software monitors network traffic and system activities to identify potential threats, alerting administrators of possible breaches.
            </p>
            <p className="mt-4 hidden lg:block">
              In physical security, Vsmart’s IDS leverages sensors and alarms to detect unauthorized entry into protected areas. Both types of IDS provide early warnings of potential threats, helping to prevent or mitigate security incidents and ensuring comprehensive protection for your systems and premises.
            </p>
          </div>
        </div>

        {/* Other Images */}
        <div className="grid-item col-span-1 sm:col-span-2 lg:grid-cols-2 xl:grid-cols-2 p-1 rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 md:grid-cols-2">
            <div className="bg-gray-300 rounded-lg overflow-hidden">
              <img
                src="https://www.example.com/intrusiondetection1.jpg"
                alt="Intrusion Detection 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-gray-300 rounded-lg overflow-hidden">
                <img
                  src="https://www.example.com/intrusiondetection2.jpg"
                  alt="Intrusion Detection 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gray-300 rounded-lg overflow-hidden">
                <img
                  src="https://www.example.com/intrusiondetection3.jpg"
                  alt="Intrusion Detection 3"
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

export default IntrusionDetection;
