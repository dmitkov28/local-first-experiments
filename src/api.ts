const baseUrl = "https://swapi.dev/api/";
const endpoints = {
  people: baseUrl + "people",
  spaceships: baseUrl + "spaceships",
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
