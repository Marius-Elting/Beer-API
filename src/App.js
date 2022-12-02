import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import DetailSite from './Pages/DetailSite/DetailSite';
import RandomBeer from './Pages/RandomBeer/RandomBeer';
import AllBeer from './Pages/AllBeer/AllBeer';
const BeerAPI = "https://ih-beers-api2.herokuapp.com/beers";

function App() {
  console.log(a);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/DetailSite" element={<DetailSite />} />
          <Route path="/RandomBeer" element={<RandomBeer />} />
          <Route path="/AllBeer" element={<AllBeer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
