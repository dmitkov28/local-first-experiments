import { FormEvent, useState } from "react";
import { Search, Shuffle } from "lucide-react";

export default function SearchForm({
  title,
  formPlaceholder,
  description,
  onSearch,
  onGetRandom,
}: {
  title: string,
  formPlaceholder: string,
  description: string,
  onSearch: (searchTerm: string) => void;
  onGetRandom: () => void;
}) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm);
    }
  };

  const handleRandomClick = () => {
    onGetRandom();
    setSearchTerm("");
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
         {title}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>

            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={formPlaceholder}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all"
            />
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Search
            </button>

            <button
              type="button"
              onClick={handleRandomClick}
              className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              <Shuffle className="h-5 w-5" />
              Get Random
            </button>
          </div>
        </form>

        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
