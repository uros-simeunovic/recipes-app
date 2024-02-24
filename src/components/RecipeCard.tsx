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

interface RecipeCardProps {
  recipe: RecipesResponse;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
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
          {recipe.instructions.map((info) => (
            <Typography variant="body2" color="text.secondary">
              {info}
            </Typography>
          ))}
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default RecipeCard;
