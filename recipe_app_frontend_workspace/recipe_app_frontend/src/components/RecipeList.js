import React from 'react';
import './RecipeList.css';

// PUBLIC_INTERFACE
function RecipeList({ recipes, onSelect }) {
  return (
    <div className="recipe-list">
      {recipes.map(recipe => (
        <div
          className="recipe-card"
          key={recipe.id}
          tabIndex={0}
          onClick={() => onSelect(recipe.id)}
          onKeyDown={e => {
            if (e.key === 'Enter' || e.key === ' ') onSelect(recipe.id);
          }}
          aria-label={"View details of " + recipe.title}
        >
          <img
            src={recipe.image}
            alt={recipe.title + " preview"}
            className="recipe-card__image"
          />
          <div className="recipe-card__info">
            <h3 className="recipe-card__title">{recipe.title}</h3>
            <p className="recipe-card__desc">{recipe.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
