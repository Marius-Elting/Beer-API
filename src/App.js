import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './Pages/Home/Home';
import DetailSite from './Pages/DetailSite/DetailSite';
import RandomBeer from './Pages/RandomBeer/RandomBeer';
import AllBeer from './Pages/AllBeer/AllBeer';
const BeerAPI = "https://ih-beers-api2.herokuapp.com/beers";

function App() {
  const [ApiReq, setApiReq] = useState([]);

  useEffect(() => {

    fetch(BeerAPI)
      .then((response) => {
        return response.json();
      })
      .then((Beer) => {
        setApiReq(Beer.slice(0));
      });

  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home Beer={ApiReq} />} />
          <Route path="/DetailSite/:id/:name" element={<DetailSite Beer={ApiReq} />} />
          <Route path="/RandomBeer" element={<RandomBeer Beer={ApiReq} />} />
          <Route path="/AllBeer" element={<AllBeer Beer={ApiReq} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
