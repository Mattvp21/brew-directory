import React from 'react';

const Searchbar = ({onInputChange, selection}) => {
  return (
    <div className='mr5 mh4'>
        <input onChange={onInputChange} className='mr7 br3 outline-0 pa3 ' placeholder={`Search by ${selection}`}/>
    </div>
  )   
}

export default Searchbar