import { Link, useLocation } from "react-router-dom";
import { Heart, Search } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-yellow-400 text-2xl font-black">
            OVERLAYS
          </Link>

          <nav className="hidden md:block">
            <ul className="flex items-center space-x-6">
              <li>
                <Link
                  to="/drops"
                  className={`transition-colors ${
                    isActive("/drops")
                      ? "text-yellow-400 font-bold"
                      : "text-gray-400 hover:text-yellow-400"
                  }`}
                >
                  New Drops
                </Link>
              </li>
              <li>
                <Link
                  to="/collections"
                  className={`transition-colors ${
                    isActive("/collections")
                      ? "text-yellow-400 font-bold"
                      : "text-gray-400 hover:text-yellow-400"
                  }`}
                >
                  Collections
                </Link>
              </li>
              <li>
                <Link
                  to="/collabs"
                  className={`transition-colors ${
                    isActive("/collabs")
                      ? "text-yellow-400 font-bold"
                      : "text-gray-400 hover:text-yellow-400"
                  }`}
                >
                  Collabs
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`transition-colors ${
                    isActive("/about")
                      ? "text-yellow-400 font-bold"
                      : "text-gray-400 hover:text-yellow-400"
                  }`}
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center space-x-4">
            <input
              type="search"
              placeholder="Search"
              className="hidden md:block bg-gray-800 border border-gray-700 text-white rounded-none placeholder:text-gray-500 px-3 py-2 focus:outline-none focus:border-yellow-400"
            />
            <button className="text-gray-400 hover:text-yellow-400 p-2">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-gray-400 hover:text-yellow-400 p-2">
              <Heart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
