import { BrowserRouter as Router } from "react-router";
import Sidebar from "./Component/Sidebar";
import MainContent from "./Component/MainContent";

const App = () => {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-900 text-white">
        <Sidebar />
        <MainContent />
      </div>
    </Router>
  );
};

export default App;
