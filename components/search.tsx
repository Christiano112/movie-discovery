"use client";

import { useState, CSSProperties, ChangeEvent, memo } from "react";
import { AiOutlineSearch } from "react-icons/ai";

interface SearchInputType {
    onSearch: (searchQuery: string) => void;
    style?: CSSProperties;
}

const SearchInput = memo(({ onSearch, style }: SearchInputType) => {
    const [searchQuery, setSearchQuery] = useState<string>("");

    const handleSearch = () => {
        onSearch(searchQuery);
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className="relative" style={style}>
            <input
                type="search"
                id="search"
                placeholder="What do you want to watch?"
                value={searchQuery}
                onChange={handleChange}
                onKeyUp={(event) => {
                    if (event.key === "Enter") {
                        handleSearch();
                    }
                }}
                className="w-full py-2 pl-2 pr-8 text-sm rounded-md focus:ring-1 focus:ring-primary focus:outline-none focus:ring-opacity-50 border-[2px solid var(--gray-300, #D1D5DB)]"
            />
            <AiOutlineSearch
                className="absolute top-1/2 right-2 transform -translate-y-1/2 text-slate-400 cursor-pointer"
                size={20}
                onClick={handleSearch}
            />
        </div>
    );
});

SearchInput.displayName = "SearchInput";

export default SearchInput;