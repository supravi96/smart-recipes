import "./RecipeCatalog.css";
import RecipeList from "../RecipeList/RecipeList";
import FilterdropDown from "../FilterDropDown/FilterDropDown";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";

function RecipeCatalog() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    "All categories",
  );
  const [searchText, setSearchText] = useState<string>("");

  return (
    <div className="catalog-wrapper">
      <div className="catalog-header">
        <p className="catalog-eyebrow">FRESH IDEAS FOR EVERYDAY COOKING</p>
        <h3>Explore simple and healthy recipes</h3>
        <p>
          Discover delicious, nutritious recipes that are easy to make. Browse
          our curated collection for inspiration, and find ideas based on your
          favorite ingredients or dietary preferences.
        </p>
      </div>
      <div className="catalog-controls">
        <>
          <SearchBar searchText={searchText} setSearchText={setSearchText} />
        </>
        <>
          <FilterdropDown
            onFilterChange={setSelectedCategory}
            selectedCategory={selectedCategory}
          />
        </>
      </div>
      <RecipeList selectedCategory={selectedCategory} searchText={searchText} />
    </div>
  );
}

export default RecipeCatalog;
