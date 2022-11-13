import './App.css';
import { Route, Routes } from "react-router-dom";

import { CategoryProvider } from './context/CategoryContext';
import { ListingProvider } from './context/ListingContext';

import ContactSidebar from './components/ContactSidebar';
import NavBar from './components/NavBar';
import Slideshow from './components/Slideshow';
import ShopIndex from './components/ShopIndex';
import CategoryDetail from './components/CategoryDetail';
// import ListingDetail from './components/ListingDetail';

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

            <Route
              path='/shop/:categoryId'
              element={
                <CategoryDetail />
              }
            />

            {/* <Route
              path='/shop/:categoryId/:listingId'
              element={
                <ListingDetail />
              }
            /> */}

          </Routes>
        </ListingProvider>
      </CategoryProvider>
    </div>
  );
}

export default App;
