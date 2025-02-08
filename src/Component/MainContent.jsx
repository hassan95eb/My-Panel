import { Routes, Route, Navigate } from "react-router";
import Todo from "./Pages/Todo";
import { Clock, TimeLapse, FocusTime, CountdownTimer } from "./Pages/Clock";
import Game from "./Pages/Game";
import Weather from "./Pages/Weather";

const MainContent = () => {
  return (
    <div className="flex-1 p-8">
      <Routes>
        <Route path="/" element={<Navigate to="/todo" replace />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/clock" element={<Clock />} />
        <Route path="/game" element={<Game />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/time-lapse" element={<TimeLapse />} />
        <Route path="/focus-time" element={<FocusTime />} />
        <Route path="/countdown" element={<CountdownTimer />} />
      </Routes>
    </div>
  );
};

export default MainContent;
