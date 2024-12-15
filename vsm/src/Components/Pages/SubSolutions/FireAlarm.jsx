import React from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";

function FireAlarm() {
  const navigate = useNavigate();
  const location = useLocation();

  // Check if the current route matches the given path
  const isActive = (path) => location.pathname.endsWith(path);

  // Redirect to default route if the base path is visited
  React.useEffect(() => {
    if (location.pathname === "/fire-safety-&-emergency") {
      navigate("AuxiliaryControls");
    }
  }, [location.pathname, navigate]);

  return (
    <div className="mt-16 p-4 lg:ml-16">
      {/* Header Section */}
      <div className="flex justify-center items-center h-48 lg:h-64">
        <h3 className="text-customBlue font-medium text-4xl sm:text-5xl lg:text-7xl text-center">
          Fire Safety & Emergency
        </h3>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {/* Auxiliary Controls */}
        <button
          className={`px-4 py-2 rounded-full transition ${
            isActive("AuxiliaryControls")
              ? "bg-customBlue text-white"
              : "text-gray-700 hover:text-black bg-gray-200"
          }`}
          onClick={() => navigate("AuxiliaryControls")}
        >
          Auxiliary Controls
        </button>

        {/* Fire Suppression */}
        <button
          className={`px-4 py-2 rounded-full transition ${
            isActive("FireSuppression")
              ? "bg-customBlue text-white"
              : "text-gray-700 hover:text-black bg-gray-200"
          }`}
          onClick={() => navigate("FireSuppression")}
        >
          Fire Suppression
        </button>

        {/* Intelligent Fire Detection */}
        <button
          className={`px-4 py-2 rounded-full transition ${
            isActive("IntelligentFireDetection")
              ? "bg-customBlue text-white"
              : "text-gray-700 hover:text-black bg-gray-200"
          }`}
          onClick={() => navigate("IntelligentFireDetection")}
        >
          Intelligent Fire Detection
        </button>

        {/* Notification Appliances */}
        <button
          className={`px-4 py-2 rounded-full transition ${
            isActive("NotificationAppliances")
              ? "bg-customBlue text-white"
              : "text-gray-700 hover:text-black bg-gray-200"
          }`}
          onClick={() => navigate("NotificationAppliances")}
        >
          Notification Appliances
        </button>

        {/* Thermal Imaging */}
        <button
          className={`px-4 py-2 rounded-full transition ${
            isActive("ThermalImaging")
              ? "bg-customBlue text-white"
              : "text-gray-700 hover:text-black bg-gray-200"
          }`}
          onClick={() => navigate("ThermalImaging")}
        >
          Thermal Imaging
        </button>
      </div>

      {/* Nested Routes will render here */}
      <div className="mt-6">
        <Outlet />
      </div>
    </div>
  );
}

export default FireAlarm;
