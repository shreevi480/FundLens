/* The ROOT component. Think of it as the
    skeleton of your app. It holds your routes
    and decides which page renders at which URL.*/ 

import './App.css';
import {Routes,Route} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Compare from './Pages/Compare/Compare';
import FundDetail from './Pages/FundDetail/FundDetail';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/compare" element={<Compare/>}></Route>
      <Route path="/about-us" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/fund/:schemeCode" element={<FundDetail/>}></Route>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
