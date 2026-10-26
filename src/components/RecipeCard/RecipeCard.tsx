import Button from "../Button/Button";
import type { Recipe } from "../../types";
import "./RecipeCard.css";

function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <div className="recipe-card">
      <div className="recipe-card__image-wrap">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="recipe-card__image"
        />
      </div>
      <div className="recipe-card__content">
        <h3 className="recipe-card__title">{recipe.title}</h3>
        <p className="recipe-card__description">
          {recipe.description.slice(0, 80)}...
        </p>
      </div>

      <div className="card-button-wrapper">
        <Button />
      </div>
    </div>
  );
}

export default RecipeCard;
