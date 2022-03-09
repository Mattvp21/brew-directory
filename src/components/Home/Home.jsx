import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar'
import SearchContainer from '../SearchContainer/SearchContainer';
import Cardlist from '../Cardlist/Cardlist';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';
import Signin from '../Signin/Signin'
import Register from '../Register/Register';
import Brewery from '../Brewery/Brewery';

function Home() {
  const [beers, setBeers] = useState([]);
  const [isSignedIn, setSignedIn] = useState(false);
  const [selection, setSelection] = useState('');
  const [searchfield, setSearchField] = useState('');
  
  const [user, setUser] = useState({
    id: '',
    name: '',
    email: '',
    password: '',
    joined: new Date()
  })

  function handleOnClick(value) {
    setSelection(value)
}

const loadUser = (data) => {
  setUser( {
    id: data.id,
    name: data.name,
    email: data.email,
    joined: data.joined
  })
}

  const onInputChange = (event) => {
    setSearchField(event.target.value)
  }

  const filteredBeers = beers.filter(b => {
    switch(selection) {
      
      case 'beer':
        return b.beer.toLowerCase().includes(searchfield.toLowerCase());
        case 'brewery':
          return b.brewery.toLowerCase().includes(searchfield.toLowerCase());
          case 'country':
            return b.country.toLowerCase().includes(searchfield.toLowerCase());
              default:
                return b.beer.toLowerCase().includes(searchfield.toLowerCase()); 
    }
             
  })
  
    useEffect(() => {
      fetch('http://localhost:5000/')
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
    //
    //
   
   );
}

export default Home;