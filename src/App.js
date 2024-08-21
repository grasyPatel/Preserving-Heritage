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
// import AppContact from './components/contact';
// import Content from './components/Content';
import AppFooter from './components/footer';
import Blog from './components/works/Blog';
import PerticularBlog from './components/works/Blogs/PerticularBlog';
import SEBI from './components/works/Blogs/SEBI';
import Webpage from './components/works/Webpage';
import SocialMediaCopy from './components/works/SocialMediaCopy';
import Email from './components/works/Email';
import Scripts from './components/works/Scripts';
import NewsLetter from './components/works/NewsLetter';
import Resumes from './components/works/Resumes';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <header id='header'>
            <AppHeader />
          </header>
          <Routes>
            <Route path="/" element={<AppHero />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/sebi' element= {<SEBI />} />
            <Route path='/webpage' element={<Webpage /> } />
            <Route path='/social-media-copy' element={<SocialMediaCopy /> } />
            <Route path='/email' element={<Email /> } />
            <Route path='/script' element={<Scripts /> } />
            <Route path='/news-letter' element={<NewsLetter /> } />
            <Route path='/resumes' element={<Resumes /> } />
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