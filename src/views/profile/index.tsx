import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Recipe } from "../../types/recipes";
import RecipeItem from "../../components/recipes/RecipeItem";
import { getUserData } from "../../hooks/auth";

const Profile: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const userData = getUserData();

  const getUserRecipes = async () => {
    const res = await axios.get(
      `https://react-blog-c2e7c-default-rtdb.firebaseio.com/recipes.json?auth=${userData.idToken}`
    );

    let dataKeys = Object.keys(res.data);
    let dataArr: Recipe[] = [];
    dataKeys.forEach((key: string) =>
      dataArr.push({ id: key, ...res.data[key] })
    );

    dataArr = dataArr.filter((item) => item.ownerId === userData.localId);
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
        title: "new recipe 1",
        ownerId: userData.localId,
      }
    );
  };

  useEffect(() => {
    getUserRecipes();
  }, []);
  return (
    <>
      <div className="page-header d-flex justify-content-between align-items-center">
        <h2 className="text-center fw-bold mb-4">My Recipes</h2>
        <a onClick={addRecipe} className="btn btn-primary px-4 text-capitalize">
          add new recipe
        </a>
        {/* <Link to="/add-recipe" className="btn btn-primary px-4 text-capitalize">
          add new recipe
        </Link> */}
      </div>
      <ul className="row">
        {recipes.length > 0 &&
          recipes.map((item) => (
            <RecipeItem
              key={item.id}
              recipe={item}
              recipeId={item.id}
              wrapperSize="sm"
            />
          ))}
        {recipes.length === 0 && <p>No recipes yet</p>}
      </ul>
    </>
  );
};

export default Profile;
