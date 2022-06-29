import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from './Components/Cards/Card';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <ItemListContainer Greeting="Bienvenido a" />
     <div className="row justify-content-between">

     <div className="col-3">
        <Card initial={0} stock={10} name='Sovereign Skin Weapon Bundle'/>
     </div>
     <div className="col-3">
        <Card initial={0} stock={6} name='Skin'/>
     </div>
     <div className="col-3">
        <Card initial={0} stock={15} name='Kaizen coins'/>
     </div>
     
     </div>
     
     
    </div>
  );
}

export default App;
