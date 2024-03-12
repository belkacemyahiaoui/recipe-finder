import { SearchInput } from "@/components/molecules/search-input";
import useGetRecipes from "../hooks/useGetRecipes";
import { useState } from "react";
import RecipeCard from "@/components/molecules/recipe-card";

function RecipesList() {
  const [search, setSearch] = useState<string>("");
  const { recipes, error, loading } = useGetRecipes(search);

  if (loading) return <p>Loading...</p>;

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  return (
    <div className="flex flex-col gap-4">
      <SearchInput onChange={handleSearchChange} />
      <div>
        {recipes.length === 0 ? (
          <p>No recipes found</p>
        ) : (
          <p>{recipes.length} recipe found</p>
        )}
      </div>
      {error && <p>{error}</p>}
      <div className="grid sm:grid-cols-2 w-full lg:grid-cols-3 grid-cols-1 gap-4">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default RecipesList;
