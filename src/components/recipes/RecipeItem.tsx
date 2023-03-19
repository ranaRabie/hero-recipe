import { Link } from "react-router-dom";
import styles from "./RecipeItem.module.scss";
import { Recipe } from "../../types/recipes";

interface RecipeProps {
  recipe: Recipe;
  recipeId: string;
  wrapperSize?: string;
}

const RecipeItem: React.FC<RecipeProps> = ({
  recipe,
  recipeId,
  wrapperSize,
}) => {
  return (
    <li className={wrapperSize === "sm" ? "col-md-4 " : "col-md-3"}>
      <div className={styles["recipe-card"]}>
        <div className={styles["recipe-card__image"]}>
          <img src="https://hips.hearstapps.com/hmg-prod/images/smash-burgers-640277f693e87.jpeg?resize=1200:*" />
        </div>
        <div className={styles["recipe-card__details"]}>
          <h4 className={styles["recipe-card__title"]}>{recipe.title}</h4>
          <p className={styles["recipe-card__description"]}>
            {recipe.description}
          </p>
          <Link
            to={`/recipe-details/${recipeId}`}
            className={
              "btn btn-primary text-capitalize " + styles["recipe-card__action"]
            }
          >
            recipe details
          </Link>
        </div>
      </div>
    </li>
  );
};

export default RecipeItem;
