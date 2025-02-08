import { useState, useEffect } from "react";
import { ArrowBack, PlayArrow, Pause, Refresh } from "@mui/icons-material";
import { useNavigate } from "react-router";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");
  const navigate = useNavigate();

  useEffect(() => {
    let intervalId;
    if (isRunning && timeLeft > 0) {
      intervalId = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, timeLeft]);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${String(h).padStart(2, "0")}:${String(m).padStart(
      2,
      "0"
    )}:${String(s).padStart(2, "0")}`;
  };

  const startTimer = () => {
    const totalSeconds =
      parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);

    if (totalSeconds > 0) {
      setTimeLeft(totalSeconds);
      setIsRunning(true);
    }
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(0);
    setHours("00");
    setMinutes("00");
    setSeconds("00");
  };

  const handleInputChange = (value, setter, max) => {
    let processed = value.replace(/\D/g, "");
    if (processed === "") processed = "00";
    if (parseInt(processed) > max) processed = max.toString();
    setter(processed.padStart(2, "0"));
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

        {!isRunning ? (
          <div className="flex justify-center gap-2 mb-8">
            <input
              type="text"
              value={hours}
              onChange={(e) => handleInputChange(e.target.value, setHours, 23)}
              className="w-16 text-center bg-gray-800 text-emerald-400 rounded p-2"
              placeholder="HH"
            />
            <span className="text-2xl text-emerald-400">:</span>
            <input
              type="text"
              value={minutes}
              onChange={(e) =>
                handleInputChange(e.target.value, setMinutes, 59)
              }
              className="w-16 text-center bg-gray-800 text-emerald-400 rounded p-2"
              placeholder="MM"
            />
            <span className="text-2xl text-emerald-400">:</span>
            <input
              type="text"
              value={seconds}
              onChange={(e) =>
                handleInputChange(e.target.value, setSeconds, 59)
              }
              className="w-16 text-center bg-gray-800 text-emerald-400 rounded p-2"
              placeholder="SS"
            />
          </div>
        ) : (
          <div className="text-6xl font-mono text-center mb-8 text-emerald-400">
            {formatTime(timeLeft)}
          </div>
        )}

        <div className="flex justify-center gap-4">
          {!isRunning ? (
            <button
              onClick={startTimer}
              className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-6 rounded-lg"
            >
              <PlayArrow />
              <span>Start</span>
            </button>
          ) : (
            <button
              onClick={() => setIsRunning(false)}
              className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-6 rounded-lg"
            >
              <Pause />
              <span>Pause</span>
            </button>
          )}
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

export default CountdownTimer;
