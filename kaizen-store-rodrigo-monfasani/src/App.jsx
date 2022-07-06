import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import Landing from './Components/Landing/Landing';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
   <>
   <Navbar/>
    <div className="App">
    <Landing Greeting="Bienvenido a" />
    </div>
    <ItemListContainer/>
   </>
    
  );
}

export default App;
