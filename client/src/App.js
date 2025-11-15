import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navigation from './components/Navigation';
import Showrooms from "../src/components/Showrooms"
import About from "../src/components/About"
import Brands from './components/Brands';
import Architects from './components/Architects';
import Projects from './components/Projects'
import Layout from './components/Layout'
import Register from '../src/Redux/Auth/registerPage'
import ContactForm from './components/ContactForm'
import LoginPage from './Redux/Auth/loginPage'
import Products from "../src/components/Products"
import Admin from './Redux/Products/Admin';
import BasketPage from '../src/Redux/Basket/BasketPage'
import ProductsPage from '../src/Redux/Products/ProductsPage';
import HomeOver from './components/HomeOver';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
          <Route path="/" element={<HomeOver/>} ></Route>
            <Route path="/Showrooms" element={<Showrooms />} ></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Products/:category" element={<ProductsPage />}></Route>
            <Route path="/Brands" element={<h1><Brands /></h1>}></Route>
            <Route path="/Architects" element={<Architects />}></Route>
            <Route path="/Contact" element={<h1>צור קשר</h1>}></Route>
            <Route path="/Projects" element={<Projects />}></Route>
            <Route path="/Jobs" element={<h1>דרושים jobsss!!!</h1>}></Route>
            <Route path="/Products" element={<Products />}></Route>
            <Route path="/Basket" element={<BasketPage />}></Route>
            <Route path="/contact" element={<ContactForm />}></Route>
            <Route path="/Login" element={<LoginPage />}></Route>
            <Route path="/Register" element={<Register />}></Route>
            <Route path="/Admin" element={<Admin />}></Route>
            <Route path="/Thank" element={<Contact/>}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}


export default App;
