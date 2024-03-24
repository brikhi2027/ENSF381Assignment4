import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Homepage from './components/Homepage';
import Products from './components/Productpage';
//import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Homepage />} />
      <Route path = "/Products" element = {<Products />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
