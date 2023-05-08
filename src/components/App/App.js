import { Routes, Route } from "react-router-dom";
import Layout from '../Layout/Layout';
import Home from '../../pages/Home/Home';
import Collections from '../../pages/Collections/Collections';
import SalePage from "../../pages/SalePage/SalePage";
import Men from "../../pages/Men/Men"
import Woman from "../../pages/Woman/Woman"
import NotFound from '../../pages/NotFound/NotFound';
import './App.scss';
import News from "../../pages/News/News";
import Delivery from "../../pages/Delivery/Delivery";
import Product from "../../pages/Product/Product";
import {useEffect, useState, createContext} from "react";

export const Context = createContext([]);
function App() {
const [cart, setCart] = useState([]);
function addCartItem (cartItem) {
    const newCart = [...cart,cartItem];
    localStorage.setItem('cart', JSON.stringify(newCart));
    setCart(newCart);
    }

useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (cart) {
        setCart(cart);
    }
},[]);

  return (
      <Context.Provider value={cart}>
          <div className="App">
              <Routes>
                  <Route path='/' element={<Layout/>}>
                      <Route index element={<Home/>}/>
                      <Route path="collections" element={<Collections/>}/>
                      <Route path="sale" element={<SalePage/>}/>
                      <Route path="news" element={<News/>}/>
                      <Route path="men" element={<Men/>}/>
                      <Route path="woman" element={<Woman/>}/>
                      <Route path='delivery' element={<Delivery/>}/>
                      <Route path='sale/:id' element={<Product buyProduct = {addCartItem }/>}/>
                      <Route path='news/:id' element={<Product buyProduct = {addCartItem }/>}/>
                      <Route path='*' element={<NotFound/>}/>
                  </Route>
              </Routes>
          </div>
      </Context.Provider>
  );
}

export default App;
