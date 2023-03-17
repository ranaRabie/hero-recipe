import { useEffect, useState } from "react";
import { Recipe } from "../../types/recipes";
import { getUserData } from "../../hooks/auth";
import RecipeItem from "../../components/recipes/RecipeItem";
import axios from "axios";

const Recipes: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const userData = getUserData();

  const getRecipes = async () => {
    const res = await axios.get(
      "https://react-blog-c2e7c-default-rtdb.firebaseio.com/recipes.json"
    );
    if (res.status !== 200) {
      alert("err");
      return false;
    }

    let dataKeys = Object.keys(res.data);
    let dataArr: Recipe[] = [];
    dataKeys.forEach((key: string) =>
      dataArr.push({ id: key, ...res.data[key] })
    );

    setRecipes(dataArr);
  };
  const addRecipe = async () => {
    const res = await axios.post(
      `https://react-blog-c2e7c-default-rtdb.firebaseio.com/recipes.json?auth=${userData.idToken}`,
      {
        // data to be posted
        category: "cat 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        directions: "abc",
        ingredients: ["ing 1", "ing 2"],
        title: "recipe test 3",
        ownerId: userData.idToken,
      }
    );
  };
  const getUserRecipes = async () => {
    const res = await axios.get(
      `https://react-blog-c2e7c-default-rtdb.firebaseio.com/recipes.json?auth=${userData.idToken}`
    );

    let dataKeys = Object.keys(res.data);
    let dataArr: Recipe[] = [];
    dataKeys.forEach((key: string) =>
      dataArr.push({ id: key, ...res.data[key] })
    );
  };
  useEffect(() => {
    getRecipes();
  }, []);
  return (
    <>
      <button onClick={addRecipe}>add recipe</button>
      <div className="page-header">
        <h2 className="text-center fw-bold mb-4">Recipes</h2>
      </div>
      <ul className="row">
        {recipes.map((item) => (
          <RecipeItem key={item.id} recipe={item} recipeId={item.id} />
        ))}
      </ul>
    </>
  );
};

export default Recipes;
