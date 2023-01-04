import './App.css';
import { Route, Routes } from "react-router-dom";

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

  // let categoryExtraInfo = [
  //   {
  //     hrefName: 'tables',
  //     id: 1
  //   },
  //   {
  //     hrefName: 'benches',
  //     id: 2
  //   },
  //   {
  //     hrefName: 'wallpieces',
  //     id: 3
  //   },
  //   {
  //     hrefName: 'trays',
  //     id: 4
  //   },
  //   {
  //     hrefName: 'bars',
  //     id: 5
  //   },
  //   {
  //     hrefName: 'cuttingboards',
  //     id: 6
  //   },
  //   {
  //     hrefName: 'wineracks',
  //     id: 7
  //   },
  //   {
  //     hrefName: 'mantels',
  //     id: 8
  //   }
  // ]

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
                <CategoryDetail 
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
