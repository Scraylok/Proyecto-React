import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import cart from './Components/Cart/Cart.js'
import Landing from './Components/Landing/Landing';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailcontainer from './Components/ItemDetailContainer/ItemDetailcontainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
   <>
   <BrowserRouter>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<div className="App"><Landing Greeting="Bienvenido a" /></div>}/>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/cart' element={ <cart/> } />
        <Route path='/category/' element={<ItemDetailcontainer/>} />
      </Routes>
   </BrowserRouter>

   </>
    
  );
}

export default App;
