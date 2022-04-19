import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css"
import App from './App';
import Blog from './routes/Blog';
import Pokemones from './routes/Pokemones';
import Inicio from './routes/Inicio';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <Routes>
     <Route path='/' element={<App />}> 
       <Route index element={<Inicio />} />
       <Route path="blog" element={<Blog />} />
       <Route path='pokemones' element={<Pokemones />} />
     </Route>
   </Routes>
  </BrowserRouter>
);
