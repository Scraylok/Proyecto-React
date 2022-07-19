import './StyleItemDetail.css'
import React,{useState} from 'react'
import { useCartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import { ItemCount } from "../itemCount/ItemCount";

export const ItemDetail = ({ data }) => {
  const [goToCart,setGoToCart] = useState(false)
  const {addProduct} = useCartContext()

  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(data, quantity)
  }

  return (
    <div className='container'>
        <div className='detail'>
            <img className='detail-image' src={data.img} alt="" />
            <div className='content'>
                <h1>{data.name}</h1>
                {
                  goToCart
                  ? <Link to="/Cart">Finalizar compra</Link>
                  :<ItemCount initial={1} stock={4} onAdd={onAdd}/>
                }
            </div>
        </div>
    </div>
    
  )
}
export default ItemDetail