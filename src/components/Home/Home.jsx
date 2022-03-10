import React, { useEffect, useState } from 'react';

import SearchContainer from '../SearchContainer/SearchContainer';
import Cardlist from '../Cardlist/Cardlist';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';


function Home() {
  const [beers, setBeers] = useState([]);
  const [selection, setSelection] = useState('');
  const [searchfield, setSearchField] = useState('');
  
function handleOnClick(value) {
    setSelection(value)
}

const onInputChange = (event) => {
    setSearchField(event.target.value)
}

const filteredBeers = beers.filter(b => {
    switch(selection) {
        case 'brewery':
        return b.name.toLowerCase().includes(searchfield.toLowerCase());
        case 'type':
        return b.brewery_type.toLowerCase().includes(searchfield.toLowerCase());
        case 'country':
        return b.country.toLowerCase().includes(searchfield.toLowerCase());
        default:
        return b.name.toLowerCase().includes(searchfield.toLowerCase()); 
    }
})
  
useEffect(() => {
    fetch('https://fast-castle-96848.herokuapp.com/beers')
    .then(response => response.json())
    .then(beer => {setBeers(beer)} )
}, [])

return (
        <div className='app'>
            <div>
              <SearchContainer 
              onInputChange={onInputChange} 
              handleOnClick={handleOnClick}
              selection={selection}
              />
              <ErrorBoundary>
                <Cardlist beers={filteredBeers}  />
              </ErrorBoundary>  
            </div>
        </div>
   );
}

export default Home;