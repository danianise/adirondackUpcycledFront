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

  // let categoryIds = [
  //   {
  //     name: 'Tables',
  //     id: 1
  //   },
  //   {
  //     name: 'Benches',
  //     id: 2
  //   },
  //   {
  //     name: 'Wall Pieces',
  //     id: 3
  //   },
  //   {
  //     name: 'Charcuterie Boards and Serving Trays',
  //     id: 4
  //   },
  //   {
  //     name: 'Bars',
  //     id: 5
  //   },
  //   {
  //     name: 'Cutting Boards',
  //     id: 6
  //   },
  //   {
  //     name: 'Wine Racks',
  //     id: 7
  //   },
  //   {
  //     name: 'Mantels',
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
              path='/shop/benches'
              element={
                <CategoryDetail 
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
              path='/shop/trays'
              element={
                <CategoryDetail 
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
              path='/shop/cuttingboards'
              element={
                <CategoryDetail
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
              path='/shop/mantels'
              element={
                <CategoryDetail 
                  name={'Mantels'}
                  categoryId={8}
                />
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
