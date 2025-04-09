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
