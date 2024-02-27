import axios from "axios";
import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import RecipesResponse from "../interfaces/Recipe";
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Pagination,
  PaginationItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { Link, useSearchParams } from "react-router-dom";

const Home = () => {
  const [recipes, setRecipes] = useState<RecipesResponse[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(6);
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage: number = parseInt(
    searchParams.get("page") ? searchParams.get("page")! : "1"
  );
  const skip: number = parseInt(
    searchParams.get("skip") ? searchParams.get("skip")! : "0"
  );

  useEffect(() => {
    const dataFetch = async () => {
      const response = await axios.get(
        `https://dummyjson.com/recipes/?page=${currentPage}&limit=${pageSize}&skip=${skip}`
      );
      setRecipes(response.data.recipes);
      setTotal(response.data.total);
    };
    dataFetch();
  }, [currentPage, pageSize]);

  const handleChange = (e: SelectChangeEvent<number>) => {
    setPageSize(e.target.value as number);
    setSearchParams({
      page: "1",
      limit: e.target.value as string,
      skip: "0",
    });
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
      <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
        <Pagination
          count={Math.ceil(total / pageSize)}
          shape="rounded"
          page={currentPage}
          renderItem={(item) => (
            <PaginationItem
              component={Link}
              to={`?page=${item.page}&limit=${pageSize}&skip=${
                (item.page! - 1) * pageSize
              } `}
              {...item}
            />
          )}
        />
        <FormControl>
          <InputLabel id="page-size">Items</InputLabel>
          <Select
            labelId="page-size"
            id="page-size"
            value={pageSize}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={12}>12</MenuItem>
            <MenuItem value={24}>24</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Home;
