import React from 'react';

const Searchbar = ({onInputChange, selection}) => {
  return (
    <div className=''>
        <input onChange={onInputChange} className=' br3 outline-0 pa3 ' placeholder={`Search by ${selection}`}/>
    </div>
  )   
}

export default Searchbar