import { Routes, Route, Navigate } from "react-router";
import Todo from "./Pages/Todo";
import Clock from "./Pages/Clock";
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
      </Routes>
    </div>
  );
};

export default MainContent;
