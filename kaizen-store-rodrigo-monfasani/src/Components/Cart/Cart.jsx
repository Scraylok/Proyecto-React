import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext'

const Cart = () => {
  const { Cart, totalPrice} = useCartContext();

  if (Cart.lenght === 0){
    return (
      <>
      <p>No hay elementos en el carrito</p>
      <Link to='/'>Comprar</Link>
      </>
    );

  }
  return (
    <div>Cart
    </div>
  )
}
export default Cart
