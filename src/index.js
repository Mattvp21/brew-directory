import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'animate.css';
import 'tachyons';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);


