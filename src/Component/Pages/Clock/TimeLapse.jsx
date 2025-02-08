import { useState, useEffect } from "react";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router";

const TimeLapse = () => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setElapsedTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <div className="h-full flex flex-col items-center justify-start p-8">
      <div className="w-full max-w-md">
        <button
          onClick={() => navigate("/clock")}
          className="mb-8 flex items-center gap-2 text-emerald-400 hover:text-emerald-300"
        >
          <ArrowBack />
          <span>Back to Clock</span>
        </button>

        <div className="text-6xl font-mono text-center mb-8 text-emerald-400">
          {formatTime(elapsedTime)}
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className="bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-6 rounded-lg"
          >
            {isRunning ? "Pause" : "Start"}
          </button>
          <button
            onClick={() => {
              setIsRunning(false);
              setElapsedTime(0);
            }}
            className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-6 rounded-lg"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimeLapse;
