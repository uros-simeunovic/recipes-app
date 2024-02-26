import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipesResponse from "../interfaces/Recipe";
import { Box, Rating, Typography } from "@mui/material";

const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState<RecipesResponse>();
  const [rating, setRating] = useState<number>(0);

  useEffect(() => {
    const dataFetch = async () => {
      const response = await axios.get(`https://dummyjson.com/recipes/${id}`);
      setRecipe(response.data);
      setRating(response.data.rating);
    };
    dataFetch();
  }, []);

  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"} mt={5}>
      <Box
        component={"img"}
        src={recipe?.image}
        width={{ md: 850, sm: 600, xs: 300 }}
        maxHeight={400}
        sx={{ borderRadius: 5, objectFit: "cover" }}
      />
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        {recipe?.mealType.map((type) => {
          return <Typography>{type}</Typography>;
        })}
      </Box>
      <Typography variant="h4">{recipe?.name}</Typography>
      <Box sx={{ display: "flex", flexDirection: "row", gap: 5 }}>
        <Box>
          <Typography>Ingredients</Typography>
          <Box>
            {recipe?.ingredients.map((ingredient, index) => {
              return (
                <Box
                  sx={{ display: "flex", flexDirection: "row" }}
                  maxWidth={400}
                  gap={2}
                >
                  <Typography>{index + 1}.</Typography>
                  <Typography>{ingredient}</Typography>
                </Box>
              );
            })}
          </Box>
        </Box>
        <Box>
          <Typography>Instructions</Typography>
          {recipe?.instructions.map((instruction, index) => {
            return (
              <Box
                sx={{ display: "flex", flexDirection: "row" }}
                maxWidth={400}
                gap={2}
              >
                <Typography>{index + 1}.</Typography>
                <Typography>{instruction}</Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box component={"div"} sx={{ display: "flex", flexDirection: "row" }}>
        <Rating name="read-only" precision={0.1} value={rating} readOnly />
        <Typography sx={{ margin: 0, padding: 0 }}>{rating}/5</Typography>
      </Box>
    </Box>
  );
};

export default Recipe;
