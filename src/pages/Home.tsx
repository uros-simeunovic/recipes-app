import axios from "axios";
import React, { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import RecipesResponse from "../interfaces/Recipe";
import { Box, Grid, Pagination, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const Home = () => {
  const [recipes, setRecipes] = useState<RecipesResponse[]>([]);
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);

  const query = useQuery();
  console.log(query.get("name"));

  useEffect(() => {
    const dataFetch = async () => {
      const response = await axios.get("https://dummyjson.com/recipes");
      setRecipes(response.data.recipes);
      setTotal(response.data.total);
    };
    dataFetch();
  }, []);

  const handleChange = (e: any, p: any) => {
    console.log(e, p);
    setPage(p);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        my: 5,
      }}
    >
      <Grid container spacing={2}>
        {recipes.map((recipe) => (
          <Grid item key={recipe.id} lg={4} md={6} sm={12}>
            <RecipeCard recipe={recipe} />
          </Grid>
        ))}
      </Grid>
      <Typography>Page: {page}</Typography>
      <Pagination count={total / 10} shape="rounded" onChange={handleChange} />
    </Box>
  );
};

export default Home;
