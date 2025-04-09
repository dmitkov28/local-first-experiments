import { Link } from "react-router";

function App() {
  return (
    <div className="min-h-screen flex justify-content-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 grow px-4">
        <Link
          to={"/people"}
          className="border border-gray-300 shadow-md p-4 rounded-md min-h-[200px] flex items-center justify-center text-gray-500 font-medium text-2xl"
        >
          🦹 People
        </Link>
        <Link
          to={"/planets"}
          className="border border-gray-300 shadow-md p-4 rounded-md min-h-[200px] flex items-center justify-center text-gray-500 font-medium text-2xl"
        >
          🪐 Planets
        </Link>
        <Link
          to={"/spaceships"}
          className="border border-gray-300 shadow-md p-4 rounded-md min-h-[200px] flex items-center justify-center text-gray-500 font-medium text-2xl"
        >
          🚀 Spaceships
        </Link>
      </div>
    </div>
  );
}

export default App;
