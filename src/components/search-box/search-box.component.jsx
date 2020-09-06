import React from 'react';
import './search-box.style.css';

export const SearchBox = ({ placeholder, HandleChange}) => (
    <input
    type="search"
    className='search'
    placeholder={placeholder}
    onChange={HandleChange}
    />
);