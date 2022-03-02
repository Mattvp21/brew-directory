import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar'
import SearchContainer from './components/SearchContainer/SearchContainer';
import Cardlist from './components/Cardlist/Cardlist';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Signin from './components/Signin/Signin'
import Register from './components/Register/Register';

function App() {
  const [beers, setBeers] = useState([]);
  const [isSignedIn, setSignedIn] = useState(false);
  const [searchfield, setSearchField] = useState('');
  const [route, setRoute] = useState('Signin');
 

 

  const onInputChange = (event) => {
    setSearchField(event.target.value)
  }

  const filteredBeers = beers.filter(b => {
          return b.beer.toLowerCase().includes(searchfield.toLowerCase());    
  })

  const onRouteChange = (route) => {
    if(route === 'Signout') {
      setSignedIn(false)
    } else if(route === "home") {
      setSignedIn(true)
    }
    setRoute(route)
  }
  
    useEffect(() => {
      fetch('https://beer-lover.p.rapidapi.com/top100', {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "beer-lover.p.rapidapi.com",
          "x-rapidapi-key": "eade96fad8msha66f7684166c682p11c947jsn9a10011cc308"
        }
      })
      .then(response => response.json())
      .then(beer => {setBeers(beer)} )
    }, []) 
  return (
     <div className='app'>
          <Navbar onRouteChange={onRouteChange} isSignedIn={isSignedIn} />
          {
            route === 'home' ? 
            <div>
              <SearchContainer 
              onInputChange={onInputChange} />
              <ErrorBoundary>
                <Cardlist beers={filteredBeers}  />
              </ErrorBoundary>
            </div>
         : (
           route === 'Signin' 
           ?  <Signin onRouteChange={onRouteChange}/>
           : <Register onRouteChange={onRouteChange}/>
         )
          }
         
     </div>
    //
    //
   
   );
}

export default App;
