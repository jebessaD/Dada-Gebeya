
import "./App.css";
import NavBar from "./NavBar";
import Hero from "./Hero";
import About from "./About"
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Cart from "./Cart";
import NotFound from "./NotFound";
import Contact from "./Contact";
import Detail from "./Detail";
import Home from "./Home"
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
