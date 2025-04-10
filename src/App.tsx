import { Link } from "react-router";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <h1 className="text-3xl font-bold text-center p-6">Star Wars PWA</h1>

      <div className="flex-grow flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full px-4">
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

      <footer className="text-center p-4 text-gray-500">
        powered by{" "}
        <a href="https://swapi.dev/" className="underline hover:text-gray-700">
          https://swapi.dev/
        </a>
      </footer>
    </div>
  );
}

export default App;
