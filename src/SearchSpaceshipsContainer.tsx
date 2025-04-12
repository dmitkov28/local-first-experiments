import SearchForm from "./SearchForm";

export default function SearchSpaceshipsContainer() {
  return (
    <SearchForm
      title="Search Spaceships"
      formPlaceholder="Enter a spaceship's name"
      description='Enter a spaceship name above or click "Get Random" to discover new
            spaceships.'
      onSearch={(q: string) => console.log(`Searching ${q}`)}
      onGetRandom={() => console.log("Get random implementation here")}
    />
  );
}
