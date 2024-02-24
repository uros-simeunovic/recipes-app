import axios from "axios";
import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import RecipesResponse from "../interfaces/Recipe";
import { Grid } from "@mui/material";

const Home = () => {
  const [recipes, setRecipes] = useState<RecipesResponse[]>([]);

  useEffect(() => {
    const dataFetch = async () => {
      const response = await axios.get("https://dummyjson.com/recipes");
      setRecipes(response.data.recipes);
    };
    dataFetch();
  }, []);

  return (
    <Grid container spacing={2}>
      {recipes.map((recipe) => (
        <Grid item>
          <RecipeCard recipe={recipe} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Home;
