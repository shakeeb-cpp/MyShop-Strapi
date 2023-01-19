import '../styles/globals.css'
import NavBar from '../components/NavBar'
import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Head from 'next/head';


export default function App({ Component, pageProps }) {

  useEffect(() => {

  }, []);

  const [cart, setCart] = useState([]);
  const [reloadKey, setreloadKey] = useState(1);

  const addToCart = (item, qty, price,url) => {
    // console.log('add to cart')
    let newCart = cart;
    for (let index = 0; index < qty; index++) {
      newCart.push([item, price,url]);
    }
    console.log(newCart)
    setCart(newCart);
    setreloadKey(Math.random())
  };

  const removeFromCart = (item, qty) => {
    let newCart = cart;
    let index = newCart.indexof(item);
    newCart.slice(index);
    setCart(newCart);
  };

  const clearCart = (item) => {
    setCart([]);
  };

  return <><NavBar key={reloadKey} cart={cart} /><Component cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} {...pageProps} /><Footer /></>
}
