import React from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";

function PhysicalSecurity() {
  const navigate = useNavigate();
  const location = useLocation();

  // Check if the current route matches the given path
  const isActive = (path) => location.pathname.endsWith(path);

  // Redirect to default route if the base path is visited
  React.useEffect(() => {
    if (location.pathname === "/physical-security") {
      navigate("AutomaticGate");
    }
  }, [location.pathname, navigate]);

  return (
    <div className="mt-16 p-4 lg:ml-16">
      {/* Header Section */}
      <div className="flex justify-center items-center h-48 lg:h-64">
        <h3 className="text-customBlue font-medium text-4xl sm:text-5xl lg:text-7xl text-center">
          Physical Security
        </h3>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {/* Automatic Gate */}
        <button
          className={`px-4 py-2 rounded-full transition ${
            isActive("AutomaticGate")
              ? "bg-customBlue text-white"
              : "text-gray-700 hover:text-black bg-gray-200"
          }`}
          onClick={() => navigate("AutomaticGate")}
        >
          Automatic Gate
        </button>

        {/* Boom Barriers */}
        <button
          className={`px-4 py-2 rounded-full transition ${
            isActive("BoomBarriers")
              ? "bg-customBlue text-white"
              : "text-gray-700 hover:text-black bg-gray-200"
          }`}
          onClick={() => navigate("BoomBarriers")}
        >
          Boom Barriers
        </button>

        {/* Electronic Fencing */}
        <button
          className={`px-4 py-2 rounded-full transition ${
            isActive("ElectronicFencing")
              ? "bg-customBlue text-white"
              : "text-gray-700 hover:text-black bg-gray-200"
          }`}
          onClick={() => navigate("ElectronicFencing")}
        >
          Electronic Fencing
        </button>

        {/* Intrusion Detection */}
        <button
          className={`px-4 py-2 rounded-full transition ${
            isActive("IntrusionDetection")
              ? "bg-customBlue text-white"
              : "text-gray-700 hover:text-black bg-gray-200"
          }`}
          onClick={() => navigate("IntrusionDetection")}
        >
          Intrusion Detection
        </button>

        {/* Lidar System */}
        <button
          className={`px-4 py-2 rounded-full transition ${
            isActive("LidarSystem")
              ? "bg-customBlue text-white"
              : "text-gray-700 hover:text-black bg-gray-200"
          }`}
          onClick={() => navigate("LidarSystem")}
        >
          Lidar System
        </button>

        {/* Turnstile Solution */}
        <button
          className={`px-4 py-2 rounded-full transition ${
            isActive("TurnstileSolution")
              ? "bg-customBlue text-white"
              : "text-gray-700 hover:text-black bg-gray-200"
          }`}
          onClick={() => navigate("TurnstileSolution")}
        >
          Turnstile Solution
        </button>
      </div>

      {/* Nested Routes will render here */}
      <div className="mt-6">
        <Outlet />
      </div>
    </div>
  );
}

export default PhysicalSecurity;
