import React ,{useState, useContext} from 'react';
import './StyleItem.css'
import { Link } from 'react-router-dom';
import {  useCartContext } from '../../Context/CartContext';



const Item = ({ product, stock }) =>  {
    
    const nombre = useContext(useCartContext)
    
    const [amount, setAmount] = useState(0)
    const count = (value) => {
        const result = amount + value
        if(result<=stock){
            setAmount(amount+value)
        }}
        
   
        return (
            <section className='StyleCard'>

                <img className='thumbnail' src={product.img} alt={product.name} />

                <div className='StyleCard-body'>
                    <p className='StyleCard-tittle'>{product.name}</p>
                    <p className='StyleCard-text'>{product.description}</p>
                    {/* <div className='d-flex'>
                    <button className="StyleCard-btn_negative" disabled={amount <=0} onClick={()=>count(-1)}>-</button>
                    <span className='d-flex flex-row p-1'>{amount} | {stock}</span>
                    <button className="StyleCard-btn_positive" onClick={()=>count(+1)}>+</button>
                    </div> */}
                    <div>
                        <Link to={`/detail/${product.id}`} className='StyleCard-btn'>Ver detalle</Link>
                    </div>
                </div>
                
            </section>
        );
   
}

export default Item;
