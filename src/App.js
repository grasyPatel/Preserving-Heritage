import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import AppHeader from './components/header';
import AppHero from './components/hero';
import AppAbout from './components/about';
import AppServices from './components/services';
// import AppWorks from './components/works';
// import AppTeams from './components/teams';
// import AppTestimonials from './components/testimonials';
// import AppPricing from './components/pricing';
// import AppBlog from './components/blog';
import AppContact from './components/contact';
import AppFooter from './components/footer';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <header id='header'>
            <AppHeader />
          </header>
          <Routes>
            <Route path="/" element={<AppHero />}>
            </Route>
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