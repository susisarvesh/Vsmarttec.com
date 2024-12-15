import React from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";

function ElectronicSolution() {
  const navigate = useNavigate();
  const location = useLocation();

  // Check if the current route matches the given path
  const isActive = (path) => location.pathname.endsWith(path);

  // Redirect to default route if the base path is visited
  React.useEffect(() => {
    if (location.pathname === "/electronic-security-systems") {
      navigate("AccessControl");
    }
  }, [location.pathname, navigate]);

  return (
    <div className="mt-16 p-4 lg:ml-16">
      {/* Header Section */}
      <div className="flex justify-center items-center h-48 lg:h-64">
        <h3 className="text-customBlue font-medium text-4xl sm:text-5xl lg:text-7xl text-center">
          Electronic Security Systems
        </h3>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {/* Access Control */}
        <button
          className={`px-4 py-2 rounded-full transition ${
            isActive("AccessControl")
              ? "bg-customBlue text-white"
              : "text-gray-700 hover:text-black bg-gray-200"
          }`}
          onClick={() => navigate("AccessControl")}
        >
          Access Control
        </button>

        {/* Advanced Analytics */}
        <button
          className={`px-4 py-2 rounded-full transition ${
            isActive("AdvancedAnalytics")
              ? "bg-customBlue text-white"
              : "text-gray-700 hover:text-black bg-gray-200"
          }`}
          onClick={() => navigate("AdvancedAnalytics")}
        >
          Advanced Analytics
        </button>

        {/* Command Solutions */}
        <button
          className={`px-4 py-2 rounded-full transition ${
            isActive("CommandSolutions")
              ? "bg-customBlue text-white"
              : "text-gray-700 hover:text-black bg-gray-200"
          }`}
          onClick={() => navigate("CommandSolutions")}
        >
          Command Solutions
        </button>

        {/* Integrated Video */}
        <button
          className={`px-4 py-2 rounded-full transition ${
            isActive("IntegratedVideo")
              ? "bg-customBlue text-white"
              : "text-gray-700 hover:text-black bg-gray-200"
          }`}
          onClick={() => navigate("IntegratedVideo")}
        >
          Integrated Video
        </button>

        {/* Key Management */}
        <button
          className={`px-4 py-2 rounded-full transition ${
            isActive("KeyManagement")
              ? "bg-customBlue text-white"
              : "text-gray-700 hover:text-black bg-gray-200"
          }`}
          onClick={() => navigate("KeyManagement")}
        >
          Key Management
        </button>

        {/* Linear Heat */}
        <button
          className={`px-4 py-2 rounded-full transition ${
            isActive("LinearHeat")
              ? "bg-customBlue text-white"
              : "text-gray-700 hover:text-black bg-gray-200"
          }`}
          onClick={() => navigate("LinearHeat")}
        >
          Linear Heat
        </button>

        {/* Physical Identity */}
        <button
          className={`px-4 py-2 rounded-full transition ${
            isActive("PhysicalIdentity")
              ? "bg-customBlue text-white"
              : "text-gray-700 hover:text-black bg-gray-200"
          }`}
          onClick={() => navigate("PhysicalIdentity")}
        >
          Physical Identity
        </button>

        {/* Pipeline Intrusion */}
        <button
          className={`px-4 py-2 rounded-full transition ${
            isActive("PipelineIntrusion")
              ? "bg-customBlue text-white"
              : "text-gray-700 hover:text-black bg-gray-200"
          }`}
          onClick={() => navigate("PipelineIntrusion")}
        >
          Pipeline Intrusion
        </button>

        {/* Vehicle Scanning */}
        <button
          className={`px-4 py-2 rounded-full transition ${
            isActive("VehicleScanning")
              ? "bg-customBlue text-white"
              : "text-gray-700 hover:text-black bg-gray-200"
          }`}
          onClick={() => navigate("VehicleScanning")}
        >
          Vehicle Scanning
        </button>
      </div>

      {/* Nested Routes will render here */}
      <div className="mt-6">
        <Outlet />
      </div>
    </div>
  );
}

export default ElectronicSolution;
