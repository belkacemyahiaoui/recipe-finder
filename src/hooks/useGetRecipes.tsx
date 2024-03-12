import { useEffect, useState } from "react";
import { Recipe } from "../types";

function useGetRecipes(ingredients: string = "") {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(false);
      try {
        const response = await fetch(
          import.meta.env.VITE_API_URL + "recipes/ingredients/" + ingredients
        );
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        setError("Error fetching recipes");
      } finally {
        setLoading(false);
      }
    };
    if (ingredients) {
      fetchRecipes();
    }
  }, [ingredients]); // Added ingredients as a dependency

  return { recipes, loading, error };
}

export default useGetRecipes;
