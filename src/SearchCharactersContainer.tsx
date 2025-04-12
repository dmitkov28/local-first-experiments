import { useState } from "react";
import { Link } from "react-router";
import SearchForm from "./SearchForm";
import { searchPeople } from "./api";
import { getEntityIdFromUrl } from "./utils";

export default function SearchCharactersContainer() {
  const [searchResults, setSearchResults] = useState<Person[] | [] | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);

  const onSearch = async (q: string) => {
    setIsLoading(true);
    const results = await searchPeople(q);
    if (results?.results?.length) {
      setSearchResults(results.results);
    }
    setIsLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <SearchForm
        title="Search Characters"
        formPlaceholder="Enter a character's name"
        description='Enter a character name above or click "Get Random" to discover new characters.'
        onSearch={onSearch}
        onGetRandom={() => console.log("Get random implementation here")}
      />

      {!searchResults ? null : (
        <>
          {isLoading && !searchResults.length && (
            <div className="flex justify-center my-8">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
            </div>
          )}

          {searchResults.length > 0 && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-4">
                Search Results ({searchResults.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {searchResults.map((person) => (
                  <Link
                    key={person.url}
                    to={`/people/${getEntityIdFromUrl(person.url)}`}
                    className="block bg-white hover:bg-blue-50 border border-gray-200 rounded-lg p-4 shadow-sm transition duration-200"
                  >
                    <div className="font-medium text-lg text-blue-600">
                      {person.name}
                    </div>
                    {person.birth_year && person.birth_year !== "unknown" && (
                      <div className="text-sm text-gray-600 mt-1">
                        Born: {person.birth_year}
                      </div>
                    )}
                    {person.homeworld && (
                      <div className="text-sm text-gray-600">
                        Homeworld: {person.homeworld}
                      </div>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {!isLoading && searchResults.length === 0 && (
            <div className="text-center text-gray-500 mt-8">
              No results found. Try another search term.
            </div>
          )}
        </>
      )}
    </div>
  );
}
