import React from 'react';
import './RecipeDetail.css';

// PUBLIC_INTERFACE
function RecipeDetail({ recipe, onBack }) {
  return (
    <div className="recipe-detail">
      <button className="back-btn" onClick={onBack} aria-label="Back to recipe list">
        ← Back
      </button>
      <h2 className="recipe-detail__title">{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} className="recipe-detail__image" />
      <p className="recipe-detail__desc">{recipe.description}</p>
      <div className="recipe-detail__section">
        <h3>Ingredients</h3>
        <ul>
          {recipe.ingredients.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="recipe-detail__section">
        <h3>Instructions</h3>
        <ol>
          {recipe.instructions.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default RecipeDetail;
