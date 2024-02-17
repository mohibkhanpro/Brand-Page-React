import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './HomePage/HomeComponents/Nav';
import Home from './HomePage/Home';
import Contact from './ContactPage/Contact';

function App() {
  return (
    < >
    <Nav/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
 
   {/* <Route path="/*" element={<PageNotFound />} /> */}
      </Routes>
    </>
  );
}

export default App;
