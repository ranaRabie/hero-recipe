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

  useEffect(() => {
    getRecipes();
  }, []);
  return (
    <>
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
