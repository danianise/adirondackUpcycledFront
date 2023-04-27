import React, {useState, useEffect} from 'react';
import { Route, Routes } from "react-router-dom";

import './App.css';
import {BsCart4} from 'react-icons/bs'

import { CategoryProvider } from './context/CategoryContext';
import { ListingProvider } from './context/ListingContext';

import ContactSidebar from './components/ContactSidebar';
import NavBar from './components/NavBar';
import Home from './components/Home';
import ShopIndex from './components/ShopIndex';
import CategoryDetail from './components/CategoryDetail';
import ListingDetail from './components/ListingDetail';
import EventIndex from './components/EventIndex';
import ShoppingCart from './components/ShoppingCart';
import About from './components/About';

function App() {

  const [cartVisibility, setCartVisibility] = useState(false)
  const [productsInCart, setProductsInCart] = useState(JSON.parse(localStorage.getItem("shopping-cart")) || [] )

  let countTracker = []
  let countTrackerSum = 0

  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(productsInCart))
  },[productsInCart])

  const addProductToCart = (product) => {
    const newProduct = {
      ...product,
      count: 1, 
    }
    if(productsInCart===0){
      setProductsInCart([
        newProduct
      ])
    } else if(productsInCart!==0) {
      if(productsInCart.includes(product)){
        setProductsInCart([
          ...productsInCart
        ])
      } else {
        setProductsInCart([
          ...productsInCart,
          newProduct
        ])
      }
    }
  }

  const onQuantityChange = (productId, count) => {
    setProductsInCart((oldState) => {
      const productsIndex = oldState.findIndex((item) => item.id === productId)
      // console.log(oldState[productsIndex].count)
      if(productsIndex !== -1){
        oldState[productsIndex].count = count
      }
      return [...oldState]
    })
  }

  const onProductRemove = (product) => {
    setProductsInCart((oldState) => {
      const productsIndex = oldState.findIndex((item) => item.id === product.id)
      if(productsIndex !== -1){
        oldState.splice(productsIndex, 1)
      } else {
        console.log(productsIndex)
      }
      return [...oldState]
    })
  }

  // const onProductRemove = (product) => {
  //   setProductsInCart((productsInCart) => {
  //     const productsIndex = productsInCart.findIndex((item) => item.id === product.id)
  //     if(product.id !== -1){
  //       productsInCart.splice(productsIndex, 1)
  //     }
  //     return [...productsInCart]
  //   })
  // }

  productsInCart.map((eachProduct) => {
    countTracker.push(parseInt(eachProduct.count))
    return countTracker
  })
  
  countTracker.map((each) => {
    countTrackerSum = countTrackerSum + each
    return countTrackerSum
  })

  return (
    <div className="App">
      <img 
        // src='adirondackLogoWater.png'
        src='https://res.cloudinary.com/di5yeg78v/image/upload/v1676572152/adirondackLogoWater_ywu8r8.png'
        alt='Logo for Adirondack Upcycled'
        id='logo' 
      />
      <NavBar />

      <button id='cartIcon'>
        <BsCart4 onClick={() => setCartVisibility(true)} size={33} />
        {productsInCart.length > 0
          ? <span className='product-count'>{countTrackerSum}</span>
          : ""
        }
      </button>
      <ContactSidebar />

      <CategoryProvider>
        <ListingProvider>
          <ShoppingCart 
                  visibility={cartVisibility}
                  productsInCart={productsInCart}
                  onClose={() => setCartVisibility(false)}
                  onQuantityChange={onQuantityChange}
                  onProductRemove={onProductRemove}
        />
          <Routes>

            <Route
              path='/'
              element={
                <Home />
              }
            />

            <Route
              path='/about'
              element={
                <About />
              }
            />

            <Route
              path='/shop'
              element={
                <ShopIndex />
              }
            />

            <Route
              path='/shop/tables'
              element={
                <CategoryDetail
                  name={'Tables'}
                  categoryId={1}
                />
              }
            />

            <Route
              path='/shop/tables/:listingId'
              element={
                <ListingDetail
                  name={'Tables'}
                  categoryId={1}
                  addProductToCart={addProductToCart}
                  productsInCart={productsInCart}
                />
              }
            />

            <Route
              path='/shop/benches'
              element={
                <CategoryDetail 
                  name={'Benches'}
                  categoryId={2}
                />
              }
            />

            <Route
              path='/shop/benches/:listingId'
              element={
                <ListingDetail 
                  name={'Benches'}
                  categoryId={2}
                  addProductToCart={addProductToCart}
                  productsInCart={productsInCart}
                />
              }
            />

            <Route
              path='/shop/wallpieces'
              element={
                <CategoryDetail
                  name='Wall Pieces'
                  categoryId={3}
                />
              }
            />

            <Route
              path='/shop/wallpieces/:listingId'
              element={
                <ListingDetail
                  name='Wall Pieces'
                  categoryId={3}
                  addProductToCart={addProductToCart}
                  productsInCart={productsInCart}
                />
              }
            />

            <Route
              path='/shop/trays'
              element={
                <CategoryDetail 
                  name={'Charcuterie Boards and Serving Trays'}
                  categoryId={4}
                />
              }
            />

            <Route
              path='/shop/trays/:listingId'
              element={
                <ListingDetail 
                  name={'Charcuterie Boards and Serving Trays'}
                  categoryId={4}
                  addProductToCart={addProductToCart}
                  productsInCart={productsInCart}
                />
              }
            />

            <Route
              path='/shop/bars'
              element={
                <CategoryDetail 
                  name={'Bars'}
                  categoryId={5}
                />
              }
            />

            <Route
              path='/shop/bars/:listingId'
              element={
                <ListingDetail 
                  name={'Bars'}
                  categoryId={5}
                  addProductToCart={addProductToCart}
                  productsInCart={productsInCart}
                />
              }
            />

            <Route
              path='/shop/cuttingboards'
              element={
                <CategoryDetail
                  name={'Cutting Boards'}
                  categoryId={6}
                />
              }
            />

            <Route
              path='/shop/cuttingboards:listingId'
              element={
                <ListingDetail
                  name={'Cutting Boards'}
                  categoryId={6}
                  addProductToCart={addProductToCart}
                  productsInCart={productsInCart}
                />
              }
            />

            <Route
              path='/shop/wineracks'
              element={
                <CategoryDetail 
                  name={'Wine Racks'}
                  categoryId={7}
                />
              }
            />

            <Route
              path='/shop/wineracks/:listingId'
              element={
                <ListingDetail 
                  name={'Wine Racks'}
                  categoryId={7}
                  addProductToCart={addProductToCart}
                  productsInCart={productsInCart}
                />
              }
            />

            <Route
              path='/shop/mantels'
              element={
                <CategoryDetail 
                  name={'Mantels'}
                  categoryId={8}
                />
              }
            />

            <Route
              path='/shop/mantels/:listingId'
              element={
                <ListingDetail 
                  name={'Mantels'}
                  categoryId={8}
                />
              }
            />

            <Route
              path='/events'
              element={
                <EventIndex />
              }
            />

          </Routes>
        </ListingProvider>
      </CategoryProvider>
    </div>
  );
}

export default App;
