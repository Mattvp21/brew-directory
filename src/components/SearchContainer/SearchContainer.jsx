import React from 'react';
import Dropdown from '../Dropdown/Dropdown';
import Searchbar from '../Searchbar/Searchbar';

const SearchContainer = ({onInputChange, handleOnClick, selection}) => {
    return (
        <div className='search flex justify-center pa1 dib'>
            <Searchbar 
            onInputChange={onInputChange} 
            selection={selection} />
            <Dropdown 
            handleOnClick={handleOnClick}
            selection={selection}
            multiSelect
            />
        </div>
    )
}

export default SearchContainer;