import { ArrowDownToLine, Wifi, WifiOff } from "lucide-react";

function App() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <header className="mb-8">
        <p className="text-center md:text-left text-lg text-slate-700">
          A simple React app to explore some{" "}
          <a
            className="font-medium text-blue-600 hover:text-blue-800 transition-colors underline underline-offset-2"
            href="https://localfirstweb.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            local-first
          </a>{" "}
          concepts and development patterns.
        </p>
      </header>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
        <div className="rounded-lg border border-blue-100 shadow-lg p-5 bg-white hover:shadow-xl transition-shadow">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-2 rounded-full mr-3">
              <ArrowDownToLine className="text-blue-600" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-slate-800">Built with</h2>
          </div>
          <ul className="space-y-2 pl-4">
            <li className="flex items-center text-slate-700">
              <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
              React for UI components
            </li>
            <li className="flex items-center text-slate-700">
              <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
              Tailwind CSS for styling
            </li>
            <li className="flex items-center text-slate-700">
              <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
              Vite PWA for offline capabilities
            </li>
          </ul>
        </div>

        <div className="rounded-lg border border-emerald-100 shadow-lg p-5 bg-white hover:shadow-xl transition-shadow">
          <div className="flex items-center mb-4">
            <div className="bg-emerald-100 p-2 rounded-full mr-3">
              <Wifi className="text-emerald-600" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-slate-800">Capabilities</h2>
          </div>
          <ul className="space-y-2 pl-4">
            <li className="flex items-center text-slate-700">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mr-2"></span>
              Available Offline (via precached static assets)
            </li>
            <li className="flex items-center text-slate-700">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mr-2"></span>
              Local data persistence
            </li>
            <li className="flex items-center text-slate-700 opacity-50">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-300 mr-2"></span>
              More features coming soon...
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 p-4 bg-blue-50 border border-blue-100 rounded-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <WifiOff className="text-blue-600 mr-2" size={18} />
            <p className="text-sm text-blue-700">
              Try turning off your internet to see offline capabilities!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
