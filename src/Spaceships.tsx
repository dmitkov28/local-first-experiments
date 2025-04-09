import {
  Calendar,
  DollarSign,
  Factory,
  Film,
  Ship,
  User,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchSpaceship } from "./api";

export default function SpaceshipDetail() {
  const [spaceship, setSpaceship] = useState<Spaceship | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { id } = useParams();

  useEffect(() => {
    const loadSpaceship = async () => {
      try {
        setLoading(true);
        const fetchedSpaceship = await fetchSpaceship(id?.toString() || "1");
        if (fetchedSpaceship) setSpaceship(fetchedSpaceship);
      } catch (err) {
        setError("Failed to load spaceship data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadSpaceship();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="p-8 bg-white rounded-lg shadow-md">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-lg font-medium text-gray-700">
              Fetching spaceship data...
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="p-8 bg-white rounded-lg shadow-md">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
              <span className="text-red-500 text-xl">!</span>
            </div>
            <p className="mt-4 text-lg font-medium text-red-600">{error}</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => window.location.reload()}
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!spaceship) return null;

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header Card */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-t-lg p-6 text-white">
          <h1 className="text-3xl font-bold">{spaceship.name}</h1>
          <p className="text-indigo-100 mt-2">{spaceship.model}</p>
          <div className="mt-3 inline-block px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm">
            {spaceship.starship_class}
          </div>
        </div>

        {/* Main Info Card */}
        <div className="bg-white shadow-lg rounded-b-lg overflow-hidden">
          {/* Technical Specifications */}
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <Ship className="mr-2 text-indigo-500" size={20} /> Technical
              Specifications
            </h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="bg-gray-50 p-3 rounded">
                <span className="text-sm text-gray-500">Length</span>
                <p className="font-medium">{spaceship.length} m</p>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <span className="text-sm text-gray-500">MGLT</span>
                <p className="font-medium">{spaceship.MGLT}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <span className="text-sm text-gray-500">Hyperdrive Rating</span>
                <p className="font-medium">{spaceship.hyperdrive_rating}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <span className="text-sm text-gray-500">Max Speed</span>
                <p className="font-medium">
                  {spaceship.max_atmosphering_speed}
                </p>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <span className="text-sm text-gray-500">Cargo Capacity</span>
                <p className="font-medium">{spaceship.cargo_capacity} kg</p>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <span className="text-sm text-gray-500">Consumables</span>
                <p className="font-medium">{spaceship.consumables}</p>
              </div>
            </div>
          </div>

          {/* Crew & Capacity */}
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <Users className="mr-2 text-indigo-500" size={20} /> Personnel &
              Capacity
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="bg-gray-50 p-4 rounded">
                <span className="text-sm text-gray-500">Crew</span>
                <p className="font-medium text-xl mt-1">{spaceship.crew}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <span className="text-sm text-gray-500">Passengers</span>
                <p className="font-medium text-xl mt-1">
                  {spaceship.passengers}
                </p>
              </div>
            </div>
          </div>

          {/* Manufacturing */}
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <Factory className="mr-2 text-indigo-500" size={20} />{" "}
              Manufacturing
            </h2>
            <div className="bg-gray-50 p-4 rounded">
              <span className="text-sm text-gray-500">Manufacturer</span>
              <p className="font-medium mt-1">{spaceship.manufacturer}</p>
            </div>
            <div className="mt-4 bg-gray-50 p-4 rounded">
              <span className="text-sm text-gray-500">Cost</span>
              <div className="flex items-center mt-1">
                <DollarSign className="text-green-500" size={18} />
                <p className="font-medium">
                  {spaceship.cost_in_credits} credits
                </p>
              </div>
            </div>
          </div>

          {/* Appearances Section */}
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <Film className="mr-2 text-indigo-500" size={20} /> Appearances
            </h2>
            {spaceship.films && spaceship.films.length > 0 ? (
              <div className="bg-gray-50 p-4 rounded">
                <h3 className="font-semibold text-gray-700 mb-2">Films</h3>
                <div className="space-y-2">
                  {spaceship.films.map((film, index) => (
                    <div key={index} className="flex items-center">
                      <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xs mr-2">
                        {index + 1}
                      </span>
                      <span>{film}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-gray-500 italic">
                No film appearances recorded
              </p>
            )}
          </div>

          {/* Pilots Section */}
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <User className="mr-2 text-indigo-500" size={20} /> Pilots
            </h2>
            {spaceship.pilots && spaceship.pilots.length > 0 ? (
              <div className="bg-gray-50 p-4 rounded">
                <div className="space-y-2">
                  {spaceship.pilots.map((pilot, index) => (
                    <div key={index} className="flex items-center">
                      <span className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-xs mr-2">
                        {index + 1}
                      </span>
                      <span>{pilot}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-gray-500 italic">No known pilots recorded</p>
            )}
          </div>

          {/* Footer with Metadata */}
          <div className="bg-gray-50 px-6 py-4 text-sm text-gray-500">
            <div className="flex items-center">
              <Calendar className="mr-2 text-gray-400" size={16} />
              <span>
                Created: {new Date(spaceship.created).toLocaleDateString()}
              </span>
              <span className="mx-2">•</span>
              <span>
                Last updated: {new Date(spaceship.edited).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
