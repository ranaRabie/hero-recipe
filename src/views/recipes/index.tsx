import { useEffect, useState } from "react";
import { Recipe } from "../../types/recipes";
import RecipeItem from "../../components/recipes/RecipeItem";
import axios from "axios";

// const dummy_recipes = [
//     {id: 1, title: 'recipe 1', description: 'Lorem Ipsum XVAHHSDKKD SHHSBDB ABHGHSHYDH AHGDS', ingredients:[], category: 'cat A'},
//     {id: 1, title: 'recipe 1', description: 'Lorem Ipsum XVAHHSDKKD SHHSBDB ABHGHSHYDH AHGDS', ingredients:[], category: 'cat A'},
//     {id: 1, title: 'recipe 1', description: 'Lorem Ipsum XVAHHSDKKD SHHSBDB ABHGHSHYDH AHGDS', ingredients:[], category: 'cat A'},
//     {id: 1, title: 'recipe 1', description: 'Lorem Ipsum XVAHHSDKKD SHHSBDB ABHGHSHYDH AHGDS', ingredients:[], category: 'cat A'},
//     {id: 1, title: 'recipe 1', description: 'Lorem Ipsum XVAHHSDKKD SHHSBDB ABHGHSHYDH AHGDS', ingredients:[], category: 'cat A'},
//     {id: 1, title: 'recipe 1', description: 'Lorem Ipsum XVAHHSDKKD SHHSBDB ABHGHSHYDH AHGDS', ingredients:[], category: 'cat A'}
// ]

const Recipes: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const getRecipes = async () => {
    const res = await axios.get(
      "https://react-blog-c2e7c-default-rtdb.firebaseio.com/recipes.json"
    );
    setRecipes(res.data);
    console.log(res.data);
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
        {recipes.map((item, id) => (
          <RecipeItem key={id} recipe={item} recipeId={id} />
        ))}
      </ul>
    </>
  );
};

export default Recipes;
