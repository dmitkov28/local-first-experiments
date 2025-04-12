import SearchForm from "./SearchForm";

export default function SearchPlanetsContainer() {
  return (
    <SearchForm
      title="Search Planets"
      formPlaceholder="Enter a planet's name"
      description='Enter a planet name above or click "Get Random" to discover new
            planets.'
      onSearch={(q: string) => console.log(`Searching ${q}`)}
      onGetRandom={() => console.log("Get random implementation here")}
    />
  );
}
