import {
  Calendar,
  Film,
  Home,
  PersonStanding,
  Rocket,
  Truck,
  User,
} from "lucide-react";
import { useEffect, useState } from "react";
import { fetchPerson } from "./api";
import { useParams } from "react-router";

export default function People() {
  const [person, setPerson] = useState<Person | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  const { id } = useParams();
  
  useEffect(() => {
    const loadPerson = async () => {
      try {
        setLoading(true);
        const fetchedPerson = await fetchPerson(id?.toString() || "1");
        if (fetchedPerson) setPerson(fetchedPerson);
      } catch (err) {
        setError("Failed to load person data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadPerson();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="p-8 bg-white rounded-lg shadow-md">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-lg font-medium text-gray-700">
              Fetching person data...
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

  if (!person) return null;

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header Card */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-t-lg p-6 text-white">
          <h1 className="text-3xl font-bold">{person.name}</h1>
          <p className="text-blue-100 mt-2">Star Wars Character Profile</p>
        </div>

        {/* Main Info Card */}
        <div className="bg-white shadow-lg rounded-b-lg overflow-hidden">
          {/* Physical Attributes Section */}
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <User className="mr-2 text-blue-500" size={20} /> Physical
              Attributes
            </h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="bg-gray-50 p-3 rounded">
                <span className="text-sm text-gray-500">Height</span>
                <p className="font-medium">{person.height} cm</p>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <span className="text-sm text-gray-500">Mass</span>
                <p className="font-medium">{person.mass} kg</p>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <span className="text-sm text-gray-500">Birth Year</span>
                <p className="font-medium">{person.birth_year}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <span className="text-sm text-gray-500">Gender</span>
                <p className="font-medium capitalize">{person.gender}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <span className="text-sm text-gray-500">Hair Color</span>
                <div className="flex items-center mt-1">
                  <div
                    className="w-4 h-4 rounded-full mr-2"
                    style={{
                      backgroundColor:
                        person.hair_color !== "n/a"
                          ? person.hair_color
                          : "#ccc",
                    }}
                  ></div>
                  <p className="font-medium capitalize">{person.hair_color}</p>
                </div>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <span className="text-sm text-gray-500">Eye Color</span>
                <div className="flex items-center mt-1">
                  <div
                    className="w-4 h-4 rounded-full mr-2"
                    style={{ backgroundColor: person.eye_color }}
                  ></div>
                  <p className="font-medium capitalize">{person.eye_color}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Origin Section */}
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <Home className="mr-2 text-blue-500" size={20} /> Origin
            </h2>
            <div className="bg-gray-50 p-4 rounded">
              <span className="text-sm text-gray-500">Homeworld</span>
              <p className="font-medium mt-1">{person.homeworld}</p>
            </div>
            {person.species && person.species.length > 0 ? (
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-700 mb-2 flex items-center">
                  <PersonStanding className="mr-2 text-green-500" size={18} />{" "}
                  Species
                </h3>
                <div className="flex flex-wrap gap-2">
                  {person.species.map((species, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                    >
                      {species}
                    </span>
                  ))}
                </div>
              </div>
            ) : (
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-700 mb-2 flex items-center">
                  <PersonStanding className="mr-2 text-green-500" size={18} />{" "}
                  Species
                </h3>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  Human
                </span>
              </div>
            )}
          </div>

          {/* Appearances Section */}
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <Film className="mr-2 text-blue-500" size={20} /> Appearances
            </h2>
            {person.films && person.films.length > 0 ? (
              <div className="bg-gray-50 p-4 rounded">
                <h3 className="font-semibold text-gray-700 mb-2">Films</h3>
                <div className="space-y-2">
                  {person.films.map((film, index) => (
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

          {/* Vehicles & Starships Section */}
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Transportation
            </h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2 flex items-center">
                  <Truck className="mr-2 text-yellow-500" size={18} /> Vehicles
                </h3>
                {person.vehicles && person.vehicles.length > 0 ? (
                  <ul className="bg-yellow-50 rounded p-3 space-y-2">
                    {person.vehicles.map((vehicle, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                        {vehicle}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500 italic">No vehicles recorded</p>
                )}
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2 flex items-center">
                  <Rocket className="mr-2 text-purple-500" size={18} />{" "}
                  Starships
                </h3>
                {person.starships && person.starships.length > 0 ? (
                  <ul className="bg-purple-50 rounded p-3 space-y-2">
                    {person.starships.map((starship, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                        {starship}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500 italic">No starships recorded</p>
                )}
              </div>
            </div>
          </div>

          {/* Footer with Metadata */}
          <div className="bg-gray-50 px-6 py-4 text-sm text-gray-500">
            <div className="flex items-center">
              <Calendar className="mr-2 text-gray-400" size={16} />
              <span>
                Created: {new Date(person.created).toLocaleDateString()}
              </span>
              <span className="mx-2">•</span>
              <span>
                Last updated: {new Date(person.edited).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
