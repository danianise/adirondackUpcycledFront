import { Slide } from 'react-slideshow-image';
import './App.css';
import { Route, Routes } from "react-router-dom"

import { CategoryProvider } from './context/CategoryContext';
import { ListingProvider } from './context/ListingContext';

import ContactSidebar from './components/ContactSidebar';
import NavBar from './components/NavBar';
import Slideshow from './components/Slideshow';
import ShopIndex from './components/ShopIndex';

function App() {
  return (
    <div className="App">
      <img 
        src='adirondackLogoWater.png'
        alt='Logo for Adirondack Upcycled'
        id='logo' 
      />
      <NavBar />
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

          </Routes>
        </ListingProvider>
      </CategoryProvider>
    </div>
  );
}

export default App;
