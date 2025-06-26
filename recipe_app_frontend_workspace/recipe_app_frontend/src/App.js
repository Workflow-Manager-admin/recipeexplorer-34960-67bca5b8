import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import SearchBar from './components/SearchBar';

// Dummy data for recipes (in a real app, fetch from API/backend)
const RECIPES = [
  {
    id: 1,
    title: 'Classic Spaghetti Carbonara',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
    description: 'A classic Italian pasta dish with eggs, cheese, pancetta, and pepper.',
    ingredients: [
      '200g spaghetti',
      '100g pancetta',
      '2 large eggs',
      '50g grated parmesan',
      'Black pepper'
    ],
    instructions: [
      'Cook spaghetti according to package instructions.',
      'Fry pancetta until crisp.',
      'Beat eggs and mix with parmesan.',
      'Drain spaghetti and combine quickly with pancetta and egg mixture.',
      'Season well with black pepper.'
    ]
  },
  {
    id: 2,
    title: 'Avocado Toast with Egg',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80',
    description: 'Simple and nutritious avocado toast, perfect for breakfast.',
    ingredients: [
      '2 slices wholegrain bread',
      '1 ripe avocado',
      '2 eggs',
      'Chili flakes',
      'Salt & pepper'
    ],
    instructions: [
      'Toast the bread.',
      'Mash avocado and season.',
      'Top toast with mashed avocado.',
      'Fry or poach eggs and place on top.',
      'Sprinkle with chili flakes.'
    ]
  },
  {
    id: 3,
    title: 'Vegetarian Chili',
    image: 'https://images.unsplash.com/photo-1512058564366-c9e1ed3e6e51?auto=format&fit=crop&w=600&q=80',
    description: 'A hearty chili made with beans and vegetables.',
    ingredients: [
      '1 onion',
      '2 cloves garlic',
      '1 bell pepper',
      '400g chopped tomatoes',
      '400g kidney beans',
      'Chili powder',
      'Cumin'
    ],
    instructions: [
      'Saute onion, garlic, and pepper.',
      'Add spices and cook until fragrant.',
      'Stir in tomatoes and beans.',
      'Simmer for 20-30 minutes.',
      'Adjust seasoning to taste.'
    ]
  },
];

function App() {
  const [recipes] = useState(RECIPES);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // PUBLIC_INTERFACE
  const handleRecipeSelect = (id) => {
    setSelectedRecipe(recipes.find(r => r.id === id));
  };

  // PUBLIC_INTERFACE
  const handleBackToList = () => {
    setSelectedRecipe(null);
  };

  // PUBLIC_INTERFACE
  const handleSearch = (term) => {
    setSearchTerm(term);
    setSelectedRecipe(null); // reset selection on new search
  };

  const filteredRecipes = recipes.filter(r =>
    r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (r.ingredients && r.ingredients.join(' ').toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="App" data-theme="light">
      <Navbar />
      <div className="container">
        <SearchBar onSearch={handleSearch} />
        {!selectedRecipe ? (
          <RecipeList
            recipes={filteredRecipes}
            onSelect={handleRecipeSelect}
          />
        ) : (
          <RecipeDetail recipe={selectedRecipe} onBack={handleBackToList} />
        )}
        {filteredRecipes.length === 0 && !selectedRecipe && (
          <div className="no-results">
            <p>No recipes found.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
