import { useState, useEffect, useCallback, memo } from "react";
import { useNavigate } from "react-router";
import PropTypes from "prop-types";
import {
  TimerOutlined,
  HourglassEmptyOutlined,
  AccessTimeOutlined,
} from "@mui/icons-material";

// Memoized navigation button component
const NavigationButton = memo(({ icon: Icon, label, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-700 text-white py-4 px-6 rounded-lg transition-all duration-300"
  >
    <Icon className="text-emerald-400" />
    <span>{label}</span>
  </button>
));

NavigationButton.displayName = "NavigationButton";
NavigationButton.propTypes = {
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

// Time display component
const TimeDisplay = memo(({ time }) => (
  <div className="text-7xl font-bold mb-12 font-mono text-emerald-400">
    {time}
  </div>
));

TimeDisplay.displayName = "TimeDisplay";
TimeDisplay.propTypes = {
  time: PropTypes.string.isRequired,
};

const Clock = () => {
  const [time, setTime] = useState(() => new Date());
  const navigate = useNavigate();

  // Memoized format time function
  const formatTime = useCallback((time) => {
    return time.toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  }, []);

  // Memoized navigation handlers
  const handleNavigate = useCallback(
    (path) => () => navigate(path),
    [navigate]
  );

  useEffect(() => {
    // Use RAF for smoother updates
    let animationFrameId;
    let previousTime = 0;

    const updateTime = (timestamp) => {
      // Update every second (1000ms)
      if (timestamp - previousTime >= 1000) {
        setTime(new Date());
        previousTime = timestamp;
      }
      animationFrameId = requestAnimationFrame(updateTime);
    };

    animationFrameId = requestAnimationFrame(updateTime);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const formattedTime = formatTime(time);

  return (
    <div className="h-full flex flex-col items-center justify-start p-8">
      <TimeDisplay time={formattedTime} />

      <div className="grid grid-cols-1 gap-6 w-full max-w-md">
        <NavigationButton
          icon={TimerOutlined}
          label="Time Lapse"
          onClick={handleNavigate("/time-lapse")}
        />

        <NavigationButton
          icon={HourglassEmptyOutlined}
          label="Focus Time"
          onClick={handleNavigate("/focus-time")}
        />

        <NavigationButton
          icon={AccessTimeOutlined}
          label="Countdown Timer"
          onClick={handleNavigate("/countdown")}
        />
      </div>
    </div>
  );
};

Clock.displayName = "Clock";

export default memo(Clock);
