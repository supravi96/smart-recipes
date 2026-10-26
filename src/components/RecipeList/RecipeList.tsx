import './RecipeList.css';
import RecipeCard from '../RecipeCard/RecipeCard';
import type { recipeListProps } from '../../types';

function RecipeList({ selectedCategory, searchText }: recipeListProps) {

    let recipes = [
        {
            title: 'Mediterranean Chickpea Salad',
            category: 'Lunch',
            description: 'A refreshing and protein-packed salad made with chickpeas, fresh vegetables, and a zesty lemon dressing.',
            image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=900&q=80'
        },
        {
            title: 'Avocado Toast Bowl',
            category: 'Breakfast',
            description: 'Creamy avocado layered with tomatoes, herbs, and a crunchy seed topping for a quick breakfast bite.',
            image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=80'
        },
        {
            title: 'Spicy Garlic Noodles',
            category: 'Dinner',
            description: 'Slurp-worthy noodles tossed with garlic, chili, and vegetables for a cozy and flavorful dinner.',
            image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=80'
        },
        {
            title: 'Berry Yogurt Parfait',
            category: 'Snack',
            description: 'A creamy parfait packed with berries, granola, and honey for a light and satisfying snack.',
            image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80'
        }
    ];
    if(selectedCategory && selectedCategory !== 'All categories') {
        recipes = recipes.filter(recipe => recipe.category === selectedCategory);
    }

    if(searchText) {
        recipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(searchText.toLowerCase()));
    }
    return (
        <div className="recipe-grid">
            {recipes.map((recipe, index) => (
                <RecipeCard key={index} recipe={recipe} />
            ))}
            {!recipes.length && <p className="no-recipes">No recipes found...</p>}
        </div>
    );
}

export default RecipeList;
