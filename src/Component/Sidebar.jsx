import { Link } from "react-router";
import ChecklistIcon from "@mui/icons-material/CheckList";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import CloudIcon from "@mui/icons-material/Cloud";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 p-6 flex flex-col">
      {/* User Info Section */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-full bg-gray-600"></div>
          <div>
            <h2 className="text-lg font-semibold">John Doe</h2>
            <p className="text-gray-400 text-sm">Admin</p>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1">
        <ul className="space-y-2">
          <li>
            <Link
              to="/todo"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <ChecklistIcon className="text-gray-400" />
              Todo
            </Link>
          </li>
          <li>
            <Link
              to="/clock"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <AccessTimeIcon className="text-gray-400" />
              Clock
            </Link>
          </li>
          <li>
            <Link
              to="/game"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <SportsEsportsIcon className="text-gray-400" />
              Game
            </Link>
          </li>
          <li>
            <Link
              to="/weather"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <CloudIcon className="text-gray-400" />
              Weather
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
