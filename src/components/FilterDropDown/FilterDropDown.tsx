import { useState } from "react";
import "./FilterDropDown.css";
import type {filterDropDownProps} from "../../types";

function FilterDropDown(props: filterDropDownProps) {
    const [isOpen, setIsOpen] = useState(false); 

    const selectHandler = (category: string) => {
        props.onFilterChange(category);
        setIsOpen(false);
    };

    const categories = ["All categories", "Breakfast", "Lunch", "Dinner", "Snack"];

    return (
        <>
            <button
                className="filter-dropdown-trigger"
                aria-expanded={isOpen}
                onClick={() => setIsOpen(!isOpen)}
            >
                {props.selectedCategory}
            </button>
            {isOpen && 
                <div className="filter-dropdown-menu">
                    {
                        categories.map((category, index) => {
                            return (
                                <button
                                    key={index}
                                    className="filter-dropdown-option"
                                    onClick={() => selectHandler(category)}
                                >
                                    {category}
                                </button>
                            );
                        })
                    }
                </div>
            }
        </>
    );
}

export default FilterDropDown;