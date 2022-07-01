import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Landing from './Components/Landing/Landing';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from './Components/Cards/Card';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';

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
