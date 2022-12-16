

// import "../App.css"
import "../styles/App.css"
import NavBar from "../components/NavBar";
import Hero from "../pages/Shop";
import About from "../pages/About"
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Cart from "../pages/Cart";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Detail from "../pages/Detail";
import Home from "../pages/Home"
const Main = () => {

  return (

    <div className=" ">
    <BrowserRouter>
      <NavBar />
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/shop" element={<Hero/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/products/:id" element={<Detail/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
      

    </div>
  );
};

export default Main;
