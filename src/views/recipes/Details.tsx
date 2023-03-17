import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Recipe } from "../../types/recipes";
import RecipeDetails from "../../components/recipes/RecipeDetails";

const Details: React.FC = () => {
  const [recipe, setRecipe] = useState<Recipe>();
  const params = useParams();
  const getRecipeDetails = async () => {
    const res = await axios.get(
      `https://react-blog-c2e7c-default-rtdb.firebaseio.com/recipes/${params.id}.json`
    );
    console.log(res);
    setRecipe(res.data);
  };
  useEffect(() => {
    getRecipeDetails();
  }, []);
  return (
    <>
      <div className="page-header">
        <h2 className="text-center fw-bold mb-4">{recipe && recipe.title}</h2>
      </div>
      {recipe && <RecipeDetails recipe={recipe} />}
    </>
  );
};

export default Details;
