import React, {useState} from 'react';
import Dropdown from '../Dropdown/Dropdown';

const items = ['beer','brewery','country','score'];

const SearchContainer = ({onInputChange}) => {
    return (
        <div className='flex justify-center pa2 flex-row bg-orange'>
            <div className=' mh4'>
                <input onChange={onInputChange} className=' br3 outline-0 pa3 ' placeholder='Search here...'/>
            </div>
            <Dropdown 
            items={items}
            multiSelect
            />
        </div>
    )
}

export default SearchContainer;