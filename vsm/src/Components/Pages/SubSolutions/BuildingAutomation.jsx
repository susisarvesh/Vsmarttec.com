import React from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";

function BuildingAutomation() {
  const navigate = useNavigate();
  const location = useLocation();

  // Check if the current route matches the given path
  const isActive = (path) => location.pathname.endsWith(path);

  // Redirect to default route if the base path is visited
  React.useEffect(() => {
    if (location.pathname === "/smart-building-automation") {
      navigate("EnergyManagement");
    }
  }, [location.pathname, navigate]);

  return (
    <div className="mt-16 p-4 lg:ml-16">
      {/* Header Section */}
      <div className="flex justify-center items-center h-48 lg:h-64">
        <h3 className="text-customBlue font-medium text-4xl sm:text-5xl lg:text-7xl text-center">
          Smart Building Automation
        </h3>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {/* Energy Management */}
        <button
          className={`px-4 py-2 rounded-full transition ${
            isActive("EnergyManagement")
              ? "bg-customBlue text-white"
              : "text-gray-700 hover:text-black bg-gray-200"
          }`}
          onClick={() => navigate("EnergyManagement")}
        >
          Energy Management
        </button>

        {/* HVAC Control */}
        <button
          className={`px-4 py-2 rounded-full transition ${
            isActive("HVACControl")
              ? "bg-customBlue text-white"
              : "text-gray-700 hover:text-black bg-gray-200"
          }`}
          onClick={() => navigate("HVACControl")}
        >
          HVAC Control
        </button>

        {/* Lightning Control */}
        <button
          className={`px-4 py-2 rounded-full transition ${
            isActive("LightningControl")
              ? "bg-customBlue text-white"
              : "text-gray-700 hover:text-black bg-gray-200"
          }`}
          onClick={() => navigate("LightningControl")}
        >
          Lightning Control
        </button>
      </div>

      {/* Nested Routes will render here */}
      <div className="mt-6">
        <Outlet />
      </div>
    </div>
  );
}

export default BuildingAutomation;
