import { useState, useEffect } from "react";
import { ArrowBack, PlayArrow, Pause, Refresh } from "@mui/icons-material";
import { useNavigate } from "react-router";

const FocusTime = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let intervalId;
    if (isRunning && timeLeft > 0) {
      intervalId = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsBreak(!isBreak);
      setTimeLeft(isBreak ? 25 * 60 : 5 * 60); // Switch between 25min and 5min
      setIsRunning(false);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, timeLeft, isBreak]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(25 * 60);
    setIsBreak(false);
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

        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-emerald-400">
            {isBreak ? "Break Time" : "Focus Time"}
          </h2>
          <div className="text-6xl font-mono text-emerald-400">
            {formatTime(timeLeft)}
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-6 rounded-lg"
          >
            {isRunning ? <Pause /> : <PlayArrow />}
            <span>{isRunning ? "Pause" : "Start"}</span>
          </button>
          <button
            onClick={resetTimer}
            className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white py-2 px-6 rounded-lg"
          >
            <Refresh />
            <span>Reset</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FocusTime;
