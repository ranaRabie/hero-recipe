import styles from "./RecipeDetails.module.scss";
import { Recipe } from "../../types/recipes";

interface RecipeDetailsProps {
  recipe: Recipe;
  recipeId?: number;
}

const RecipeDetails: React.FC<RecipeDetailsProps> = ({ recipe, recipeId }) => {
  return (
    <div className={styles["recipe-details"]}>
      <p className={styles["recipe-details__description"]}>
        {recipe.description}
      </p>
      <div className={styles["recipe-details__image"]}>
        <img src="https://hips.hearstapps.com/hmg-prod/images/smash-burgers-640277f693e87.jpeg?resize=1200:*" />
      </div>
      <div className={styles["recipe-details__details"]}>
        <h4>Ingredients</h4>
        <div className={styles["recipe-details__ingredients"]}>
          {recipe.ingredients.map((item, id) => (
            <span key={id}>{item}</span>
          ))}
        </div>
        <h4>The Way to make {recipe.title}</h4>
        <div className={styles["recipe-details__directions"]}>
          {recipe.directions}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
