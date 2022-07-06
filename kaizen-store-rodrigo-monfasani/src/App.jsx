import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import Landing from './Components/Landing/Landing';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailcontainer from './Components/ItemDetailContainer/ItemDetailcontainer';

function App() {
  return (
   <>
   <Navbar/>
    <div className="App">
    <Landing Greeting="Bienvenido a" />
    </div>
    <ItemListContainer/>
    <ItemDetailcontainer/>

   </>
    
  );
}

export default App;
