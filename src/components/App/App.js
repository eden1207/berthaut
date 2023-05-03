import '../../styles/App.css';
import {Routes, Route} from 'react-router-dom';
import ScrollToTop from '../ScrollToTop/ScrollToTop.js';
import ErrorPage from '../ErrorPage/ErrorPage.js';
import Home from '../Home/Home.js';
import Introduction from '../Introduction/Introduction.js';
import Honorarium from '../Honorarium/Honorarium.js';
import Contact from '../Contact/Contact.js';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/introduction'} element={<Introduction />} />
        <Route path={'/honorarium'} element={<Honorarium />} />
        <Route path={'*'} element={<ErrorPage />} />
        <Route path={'/contact'} element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;