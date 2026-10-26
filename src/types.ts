export type Recipe = {
    title: string; 
    description: string; 
    image: string;
}

export type searchBarProps = {
    searchText: string;
    setSearchText: (text: string) => void;
};

export type filterDropDownProps = {
    selectedCategory: string | null;
    onFilterChange: (category: string) => void;
};

export type recipeListProps = {
    selectedCategory: string | null;
    searchText: string;
};