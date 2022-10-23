import './App.css';
import ContactSidebar from './components/ContactSidebar';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <img 
        src='adirondackUpcycledLogo.png'
        alt='Logo for Adirondack Upcycled' 
      />
      <NavBar />
      <ContactSidebar />
    </div>
  );
}

export default App;
