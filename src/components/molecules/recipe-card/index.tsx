import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Recipe } from "@/types";
import { Beef } from "lucide-react";
import { useNavigate } from "react-router-dom";

function RecipeCard({ recipe }: { recipe: Recipe }) {
  const navigate = useNavigate();

  function handleRecipeClick() {
    navigate(`/recipes/${recipe.id}`);
  }
  
  return (
    <Card className="w-full h-50" onClick={handleRecipeClick}>
      <CardHeader>
        <CardTitle>{recipe.recipe_name}</CardTitle>
        <CardDescription>
          {recipe.ingredients.join(", ").slice(0, 50)}...
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center">
        {recipe.imageURL ? (
          <img
            alt={recipe.recipe_name}
            height="40"
            src={recipe.imageURL}
            width="40"
          />
        ) : (
          <Beef height={40} width={40} />
        )}
      </CardContent>
    </Card>
  );
}

export default RecipeCard;
