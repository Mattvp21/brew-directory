import React from 'react';
import Home from './components/Home/Home'
import Brewery from './components/Brewery/Brewery';
import Navbar from './components/Navbar/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/beers/:id" element={<Brewery />} />
        </Routes>
      </BrowserRouter>
    </div>
   );
}

export default App;
