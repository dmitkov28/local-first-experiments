const baseUrl = "https://swapi.dev/api/";
const endpoints = {
  people: baseUrl + "people",
  spaceships: baseUrl + "starships",
  planets: baseUrl + "planets",
};

async function get<T>(url: string, options: RequestInit = { method: "GET" }) {
  const res = await fetch(url, options);
  if (!res.ok) {
    console.error("Error fetching data");
    return null;
  }
  const data = (await res.json()) as T;
  return data;
}

export async function fetchPerson(id: string) {
  const person = await get<Person>(`${endpoints.people}/${id}`);
  return person;
}

export async function fetchSpaceship(id: string) {
  const spaceship = await get<Spaceship>(`${endpoints.spaceships}/${id}`);
  return spaceship;
}

export async function fetchPlanet(id: string) {
  const planet = await get<Planet>(`${endpoints.planets}/${id}`);
  return planet;
}

export async function searchPeople(q: string) {
  const people = await get<PeopleSearchResults>(
    `${endpoints.people}?search=${q}`
  );
  return people;
}

export async function searchPlanets(q: string) {
  const planets = await get<PlanetsSearchResults>(
    `${endpoints.planets}?search=${q}`
  );
  return planets;
}

export async function searchSpaceships(q: string) {
  const spaceships = await get<SpaceshipSearchResults>(
    `${endpoints.spaceships}?search=${q}`
  );
  return spaceships;
}
