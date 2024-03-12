import { useEffect, useState } from "react";
import { Recipe } from "../types";

function useGetRecipe(id: string) {
  const [data, setRecipes] = useState<Recipe>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchRecipe = async () => {
      setLoading(false);
      try {
        const response = await fetch(
          import.meta.env.VITE_API_URL + "recipes/" + id
        );
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        setError("Error fetching recipes");
      } finally {
        setLoading(false);
      }
    };
    fetchRecipe();
  }, [id]); // Added ingredients as a dependency

  return { data, loading, error };
}

export default useGetRecipe;
