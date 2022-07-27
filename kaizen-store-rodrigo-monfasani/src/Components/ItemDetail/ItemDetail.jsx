import './StyleItemDetail.css'
import React,{useState} from 'react'
import { useCartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import { ItemCount } from "../itemCount/ItemCount";

export const ItemDetail = ({ products }) => {
  
  

  const [goToCart,setGoToCart] = useState(false)
  const {addProduct} = useCartContext()

  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct({...products, qty:quantity})
  }

  return (
    <div className='container'>
        <div className='detail'>
            <img className='detail-image' src={products.img} alt={products.name}/>
            <div className='content'>
                <h1>{products.name}</h1>
                <h2>{products.description}</h2>
                <h3>$ {products.price}</h3>
                <h4>Stock :{products.stock}</h4>
                {
                  goToCart
                  ? <Link to="/Cart">Finalizar compra</Link>
                  :<ItemCount initial={1} stock={products.stock} onAdd={onAdd}/>
                }
            </div>
        </div>
    </div>
    
  )
}
export default ItemDetail