import React from 'react';
import Dropdown from '../Dropdown/Dropdown';


const SearchContainer = ({onInputChange, handleOnClick, selection}) => {
    return (
        <div className='search flex justify-center pa1 dib'>
            <div className='mr5 mh4'>
                <input onChange={onInputChange} className='mr7 br3 outline-0 pa3 ' placeholder={`Search by ${selection}`}/>
            </div>
            <Dropdown 
            
            handleOnClick={handleOnClick}
            selection={selection}
            multiSelect
            />
        </div>
    )
}

export default SearchContainer;