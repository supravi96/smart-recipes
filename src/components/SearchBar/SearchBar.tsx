import "./SearchBar.css";
import type { searchBarProps } from "../../types";

const SearchBar = ({ searchText, setSearchText }: searchBarProps) => {

    return (
        <div className="search-bar">
            <input type="text" placeholder="Search recipes..." value={searchText} onChange={(e) => setSearchText(e.target.value)} />
            {searchText && <button className="clear-button" onClick={() => setSearchText('')}>&times;</button>}
        </div>
    );
}

export default SearchBar;