import React, {useState} from 'react';
import { Route, Routes } from "react-router-dom";

import './App.css';
import {BsCart4} from 'react-icons/bs'

import { CategoryProvider } from './context/CategoryContext';
import { ListingProvider } from './context/ListingContext';

import ContactSidebar from './components/ContactSidebar';
import NavBar from './components/NavBar';
import Slideshow from './components/Slideshow';
import ShopIndex from './components/ShopIndex';
import CategoryDetail from './components/CategoryDetail';
import ListingDetail from './components/ListingDetail';
import EventIndex from './components/EventIndex';
import ShoppingCart from './components/ShoppingCart';

function App() {

  const [cartVisibility, setCartVisibility] = useState(false)
  const [productsInCart, setProductsInCart] = useState(0)

  const addProductToCart = (product) => {
    const newProduct = {
      ...product,
      count: 1, 
    }
    if (productsInCart!==0){
      setProductsInCart([
        ...productsInCart,
        newProduct
      ])
    } else {
      setProductsInCart([
        newProduct
      ])
    }
    
  }

  return (
    <div className="App">
      <img 
        src='adirondackLogoWater.png'
        alt='Logo for Adirondack Upcycled'
        id='logo' 
      />
      <NavBar />
      <ShoppingCart 
                visibility={cartVisibility}
                products={productsInCart}
                onClose={() => setCartVisibility(false)}
      />
      <button id='cartIcon'>
        <BsCart4 onClick={() => setCartVisibility(true)} size={33} />
        {productsInCart.length > 0
          ? <span className='product-count'>{productsInCart.length}</span>
          : ""
        }
      </button>
      <ContactSidebar />

      <CategoryProvider>
        <ListingProvider>
          <Routes>

            <Route
              path='/'
              element={
                <Slideshow />
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
