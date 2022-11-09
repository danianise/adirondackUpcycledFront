import { Slide } from 'react-slideshow-image';
import './App.css';
import { ListingProvider } from './context/ListingContext';

import ContactSidebar from './components/ContactSidebar';
import NavBar from './components/NavBar';
import Slideshow from './components/Slideshow';

function App() {
  return (
    <div className="App">
      <img 
        src='adirondackLogoNoBG.png'
        alt='Logo for Adirondack Upcycled'
        id='logo' 
      />
      <NavBar />
      <ContactSidebar />
      
      <ListingProvider>
        <Slideshow />
      </ListingProvider>
    </div>
  );
}

export default App;
