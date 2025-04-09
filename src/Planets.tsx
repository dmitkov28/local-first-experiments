import {
  Calendar,
  Compass,
  Droplet,
  Film,
  Globe,
  Thermometer,
  Timer,
  User,
  Users,
  Weight,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchPlanet } from "./api";

export default function PlanetDetail() {
  const [planet, setPlanet] = useState<Planet | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { id } = useParams();

  useEffect(() => {
    const loadPlanet = async () => {
      try {
        setLoading(true);
        const fetchedPlanet = await fetchPlanet(id?.toString() || "1");
        if (fetchedPlanet) setPlanet(fetchedPlanet);
      } catch (err) {
        setError("Failed to load planet data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadPlanet();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="p-8 bg-white rounded-lg shadow-md">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-lg font-medium text-gray-700">
              Fetching planet data...
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

  if (!planet) return null;

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header Card */}
        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-t-lg p-6 text-white">
          <h1 className="text-3xl font-bold">{planet.name}</h1>
          <p className="text-cyan-100 mt-2">Star Wars Planet</p>
        </div>

        {/* Main Info Card */}
        <div className="bg-white shadow-lg rounded-b-lg overflow-hidden">
          {/* Physical Characteristics */}
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <Globe className="mr-2 text-cyan-500" size={20} /> Physical
              Characteristics
            </h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="bg-gray-50 p-3 rounded">
                <span className="text-sm text-gray-500">Diameter</span>
                <p className="font-medium">{planet.diameter} km</p>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <span className="text-sm text-gray-500">Gravity</span>
                <div className="flex items-center mt-1">
                  <Weight className="text-gray-400 mr-1" size={16} />
                  <p className="font-medium">{planet.gravity}</p>
                </div>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <span className="text-sm text-gray-500">Surface Water</span>
                <div className="flex items-center mt-1">
                  <Droplet className="text-blue-400 mr-1" size={16} />
                  <p className="font-medium">{planet.surface_water}%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Environmental Conditions */}
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <Thermometer className="mr-2 text-cyan-500" size={20} />{" "}
              Environmental Conditions
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="bg-gray-50 p-4 rounded">
                <span className="text-sm text-gray-500">Climate</span>
                <p className="font-medium mt-1 capitalize">{planet.climate}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <span className="text-sm text-gray-500">Terrain</span>
                <p className="font-medium mt-1 capitalize">{planet.terrain}</p>
              </div>
            </div>
          </div>

          {/* Orbital Information */}
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <Compass className="mr-2 text-cyan-500" size={20} /> Orbital
              Information
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="bg-gray-50 p-4 rounded">
                <span className="text-sm text-gray-500">Rotation Period</span>
                <div className="flex items-center mt-1">
                  <Timer className="text-gray-400 mr-1" size={16} />
                  <p className="font-medium">{planet.rotation_period} hours</p>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <span className="text-sm text-gray-500">Orbital Period</span>
                <div className="flex items-center mt-1">
                  <Timer className="text-gray-400 mr-1" size={16} />
                  <p className="font-medium">{planet.orbital_period} days</p>
                </div>
              </div>
            </div>
          </div>

          {/* Population */}
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <Users className="mr-2 text-cyan-500" size={20} /> Population
            </h2>
            <div className="bg-gray-50 p-4 rounded">
              <span className="text-sm text-gray-500">Total Population</span>
              <p className="font-medium text-xl mt-1">
                {parseInt(planet.population).toLocaleString()} beings
              </p>
            </div>
          </div>

          {/* Appearances Section */}
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <Film className="mr-2 text-cyan-500" size={20} /> Appearances
            </h2>
            {planet.films && planet.films.length > 0 ? (
              <div className="bg-gray-50 p-4 rounded">
                <h3 className="font-semibold text-gray-700 mb-2">Films</h3>
                <div className="space-y-2">
                  {planet.films.map((film, index) => (
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

          {/* Residents Section */}
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <User className="mr-2 text-cyan-500" size={20} /> Notable
              Residents
            </h2>
            {planet.residents && planet.residents.length > 0 ? (
              <div className="bg-gray-50 p-4 rounded">
                <div className="space-y-2">
                  {planet.residents.map((resident, index) => (
                    <div key={index} className="flex items-center">
                      <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xs mr-2">
                        {index + 1}
                      </span>
                      <span>{resident}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-gray-500 italic">
                No notable residents recorded
              </p>
            )}
          </div>

          {/* Footer with Metadata */}
          <div className="bg-gray-50 px-6 py-4 text-sm text-gray-500">
            <div className="flex items-center">
              <Calendar className="mr-2 text-gray-400" size={16} />
              <span>
                Created: {new Date(planet.created).toLocaleDateString()}
              </span>
              <span className="mx-2">•</span>
              <span>
                Last updated: {new Date(planet.edited).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
