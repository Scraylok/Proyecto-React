import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext'
import { itemCart } from '../itemCart/itemCart';

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
    <>
      {
        Cart.map(products => <itemCart key={products.id} products={products}/>)
      }
      <p>Total: {totalPrice()}</p>
    </>
  )
}
export default Cart
