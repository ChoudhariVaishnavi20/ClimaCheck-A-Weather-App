import { useState } from "react";

export default function Lamp() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <div className="relative flex flex-col items-center">
        {/* Wire */}
        <div className="w-1 h-24 bg-gray-700"></div>

        {/* Lamp Head */}
        <div
          className={`w-32 h-32 rounded-full transition-all ${
            isOn ? "bg-yellow-300 shadow-yellow-400 shadow-lg" : "bg-gray-600"
          }`}
        ></div>
      </div>

      {/* Button to Toggle Lamp */}
      <button
        onClick={() => setIsOn(!isOn)}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        {isOn ? "Turn Off" : "Turn On"}
      </button>
    </div>
  );
}
