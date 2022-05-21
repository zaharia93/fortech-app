import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { CreateMovie } from "./pages/Movies/AddMovie"
import { Movies } from './pages/Movies/Movies';
import { About } from "./pages/About/About"
import { DetailMovie } from './pages/Movies/DetailMovie';



function App() {
  return ( 
       <BrowserRouter> 
       <Routes>
         <Route  path="/" element={<Home />}   />
         <Route  path="add" element={<CreateMovie  />}   />
         <Route  path="movies" element={<Movies _id='' title='' overview={''} release_date={0} poster_path={''} vote_average={0} />}   />
         <Route  path="about" element={<About />}   />
         <Route  path="detail/:movieId" element={<DetailMovie  />}   />
       </Routes>
       </BrowserRouter>
      
  ); 
}

export default App;
