import { BrowserRouter, Route, Routes } from "react-router-dom";
import RecipesList from "../pages/RecipesList";
import { RECIPE_DETAIL, RECIPE_LIST } from "./routes";
import RecipeDetail from "@/pages/Recipe";

function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RECIPE_LIST} element={<RecipesList />} />
        <Route path={RECIPE_DETAIL} element={<RecipeDetail />} />
        <Route path="*" element={<RecipesList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Navigation;
