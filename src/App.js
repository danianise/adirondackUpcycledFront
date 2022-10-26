import { Slide } from 'react-slideshow-image';
import './App.css';
import ContactSidebar from './components/ContactSidebar';
import NavBar from './components/NavBar';
import Slideshow from './components/Slideshow';

function App() {
  return (
    <div className="App">
      <img 
        src='adirondackUpcycledLogo.png'
        alt='Logo for Adirondack Upcycled' 
      />
      <NavBar />
      <ContactSidebar />
      <Slideshow />
    </div>
  );
}

export default App;
