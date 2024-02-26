import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import RecipesResponse from "../interfaces/Recipe";
import { Link } from "react-router-dom";

interface RecipeCardProps {
  recipe: RecipesResponse;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <Card
      sx={{
        // maxWidth: 400,
        maxHeight: 500,
        borderRadius: 5,
        boxShadow: 5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        margin: 5,
      }}
    >
      <CardMedia
        sx={{ height: 260 }}
        image={recipe.image}
        title={recipe.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {recipe.name}
        </Typography>
        <Box component={"div"} sx={{ maxHeight: 100, overflow: "hidden" }}>
          {recipe.instructions.map((info, index) => (
            <Typography variant="body2" color="text.secondary" key={index}>
              {info}
            </Typography>
          ))}
        </Box>
      </CardContent>
      <CardActions>
        <Button>
          <Link to={`/recipes/${recipe.id}`}>Vise</Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default RecipeCard;
