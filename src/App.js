import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import AppHeader from './components/header';
import AppHero from './components/hero';
import AppFooter from './components/footer';
import IndiaMap from './components/IndiaMap';
import MadhyaPradesh from './components/States/MadhyaPradesh';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <header id='header'>
            <AppHeader />
          </header>
          <Routes>
            <Route path="/" element={<AppHero />} />
            <Route path="/map" element={<IndiaMap />} />
            <Route path="/MadhyaPradesh" element={<MadhyaPradesh />} />
          </Routes>
          <footer id='footer'>
            <AppFooter />
          </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;


// Reference 
// https://minihabits.com/




// KeyWord Generator
// https://ahrefs.com/keyword-generator