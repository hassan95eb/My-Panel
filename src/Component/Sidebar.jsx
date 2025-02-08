import { Link } from "react-router";

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
              <span className="material-icons-outlined">checklist</span>
              Todo
            </Link>
          </li>
          <li>
            <Link
              to="/clock"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <span className="material-icons-outlined">schedule</span>
              Clock
            </Link>
          </li>
          <li>
            <Link
              to="/game"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <span className="material-icons-outlined">sports_esports</span>
              Game
            </Link>
          </li>
          <li>
            <Link
              to="/weather"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <span className="material-icons-outlined">cloud</span>
              Weather
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
