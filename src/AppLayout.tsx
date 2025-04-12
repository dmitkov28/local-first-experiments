import { Link, Outlet, useLocation } from "react-router";
import { useOnlineStatus } from "./hooks";

function AppLayout() {
  const isOnline = useOnlineStatus();
  const location = useLocation();
  const currentPathname = location.pathname;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header with online status in top right */}
      <header className="bg-gray-800 text-white p-4 shadow-md relative">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Star Wars PWA</h1>
          <div className="absolute top-4 right-4 flex items-center">
            <span
              className={`px-3 py-1 rounded-full ${
                isOnline ? "bg-emerald-500" : "bg-gray-400"
              }`}
            >
              <span className="inline-block w-2 h-2 rounded-full mr-2 bg-white"></span>
              {isOnline ? "Online" : "Offline"}
            </span>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-gray-700 text-white p-2">
        <div className="container mx-auto flex space-x-6">
          <Link
            to="/"
            className={`${
              currentPathname == "/" && "text-yellow-300"
            } hover:text-yellow-300 font-medium px-2 py-1`}
          >
            Home
          </Link>
          <Link
            to="/people"
            className={`${
              currentPathname == "/people" && "text-yellow-300"
            } hover:text-yellow-300 font-medium px-2 py-1`}
          >
            🦹 People
          </Link>
          <Link
            to="/planets"
            className={`${
              currentPathname == "/planets" && "text-yellow-300"
            } hover:text-yellow-300 font-medium px-2 py-1`}
          >
            🪐 Planets
          </Link>
          <Link
            to="/spaceships"
            className={`${
              currentPathname == "/spaceships" && "text-yellow-300"
            } hover:text-yellow-300 font-medium px-2 py-1`}
          >
            🚀 Spaceships
          </Link>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-grow container mx-auto p-6">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4 text-sm">
        powered by{" "}
        <a
          href="https://swapi.dev/"
          className="underline hover:text-yellow-300"
        >
          https://swapi.dev/
        </a>
      </footer>
    </div>
  );
}

export default AppLayout;
