import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import Cart from './Components/Cart/Cart';
import Landing from './Components/Landing/Landing';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailcontainer from './Components/ItemDetailContainer/ItemDetailcontainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
  
   <BrowserRouter>
        <Navbar/>
      <Routes>

        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/Category/categoryId' element={<ItemListContainer/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Detail/:id' element={<ItemDetailcontainer/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
