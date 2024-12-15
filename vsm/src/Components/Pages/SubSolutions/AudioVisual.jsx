import React from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";

function AudioVisual() {
  const navigate = useNavigate();
  const location = useLocation();

  // Check if the current route matches the given path
  const isActive = (path) => location.pathname.endsWith(path);

  // Redirect to default route if the base path is visited
  React.useEffect(() => {
    if (location.pathname === "/audio-visual-innovations") {
      navigate("Meeting-Rooms");
    }
  }, [location.pathname, navigate]);

  return (
    <div className="mt-16 p-4 lg:ml-16">
      {/* Header Section */}
      <div className="flex justify-center items-center h-48 lg:h-64">
        <h3 className="text-customBlue font-medium text-4xl sm:text-5xl lg:text-7xl text-center">
          AudioVisual
        </h3>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {/* Meeting Rooms */}
        <button
          className={`px-4 py-2 rounded-full transition ${
            isActive("Meeting-Rooms")
              ? "bg-customBlue text-white"
              : "text-gray-700 hover:text-black bg-gray-200"
          }`}
          onClick={() => navigate("Meeting-Rooms")}
        >
          Meeting Rooms
        </button>

        {/* Video Wall */}
        <button
          className={`px-4 py-2 rounded-full transition ${
            isActive("VideoWall")
              ? "bg-customBlue text-white"
              : "text-gray-700 hover:text-black bg-gray-200"
          }`}
          onClick={() => navigate("VideoWall")}
        >
          Video Wall
        </button>

        {/* Digital Signage */}
        <button
          className={`px-4 py-2 rounded-full transition ${
            isActive("DigitalSignage")
              ? "bg-customBlue text-white"
              : "text-gray-700 hover:text-black bg-gray-200"
          }`}
          onClick={() => navigate("DigitalSignage")}
        >
          Digital Signage
        </button>

        {/* Interactive Display Solutions */}
        <button
          className={`px-4 py-2 rounded-full transition ${
            isActive("Interactive-DisplaySolutions")
              ? "bg-customBlue text-white"
              : "text-gray-700 hover:text-black bg-gray-200"
          }`}
          onClick={() => navigate("Interactive-DisplaySolutions")}
        >
          Interactive Display Solutions
        </button>
      </div>

      {/* Nested Routes will render here */}
      <div className="mt-6">
        <Outlet />
      </div>
    </div>
  );
}

export default AudioVisual;
