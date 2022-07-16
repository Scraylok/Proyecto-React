import React ,{useState, useContext} from 'react';
import './StyleItem.css'
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';



const Item = ({products,stock}) =>  {
    const nombre = useContext(CartContext)

    const {img, name, description} = products
 
    const [amount, setAmount] = useState(0)
    const count = (value) => {
        const result = amount + value
        if(result<=stock){
            setAmount(amount+value)
            
        }
        
         }
   
        return (
            <section className='StyleCard'>

                <img className='thumbnail' src={img} alt={name} />

                <div className='StyleCard-body'>
                    <p className='StyleCard-tittle'>{name}</p>
                    <p className='StyleCard-text'>{description}</p>
                    <div className='d-flex'>
                    <button className="StyleCard-btn_negative" disabled={amount <=0} onClick={()=>count(-1)}>-</button>
                    <span className='d-flex flex-row p-1'>{amount} | {stock}</span>
                    <button className="StyleCard-btn_positive" onClick={()=>count(+1)}>+</button>
                    </div>
                    <div>
                        <button className='StyleCard-btn'>Ver detalle</button>
                    </div>
                </div>
                
            </section>
        );
   
}

export default Item;
