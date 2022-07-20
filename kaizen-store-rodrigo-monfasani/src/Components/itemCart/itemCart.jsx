import React from 'react'
import { useCartContext } from '../../Context/CartContext'
import './itemCart.css'

export const itemCart = ({products}) => {
    const { removeProduct } = useCartContext();
  return (
    <div className='itemCart'>
        <img src={products.img} alt={products.name} />
        <div>
            <h2>{products.name}</h2>
            <p>Cantidad: {products.quantity}</p>
            <p>Precio u. : {products.price}</p>
            <p>Subtotal: ${products.quantity * products.price}</p>
            <button onClick={() => removeProduct(products.id)}>Eliminar</button>
        </div>
    </div>
  )
}
