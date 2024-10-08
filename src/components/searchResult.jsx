import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
    const query = new URLSearchParams(useLocation().search).get('query');

    // Implement your search logic here, e.g., filtering items based on the query
    // For demonstration purposes, we'll just show the query
    return (
        <div>
            <h2>Search Results for: {query}</h2>
            {/* Display filtered items here */}
        </div>
    );
};

export default SearchResults;
