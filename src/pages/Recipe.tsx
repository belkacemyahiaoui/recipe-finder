import useGetRecipe from "@/hooks/useGetRecipe";
import { useParams } from "react-router-dom";

function RecipeDetail() {
  const { id = "" } = useParams();
  const { data, loading, error } = useGetRecipe(id);
  
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data && (
        <div className="flex flex-col gap-3 text-left">
          <h1 className="text-2xl">{data.recipe_name}</h1>
          <p className="italic text-gray-400">{data.ingredients.join(", ")}</p>
          <div className="flex flex-col gap-2">
            {data.cooking_instructions.map(({ instruction, step }, index) => (
              <div key={index}>
                <p className="text-xl font-semibold">
                  {index + 1} {step}
                </p>
                <p>{instruction}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default RecipeDetail;
