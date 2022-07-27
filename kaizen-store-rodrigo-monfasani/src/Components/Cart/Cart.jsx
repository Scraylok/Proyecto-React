import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext'
import { itemCart } from '../itemCart/itemCart';

const Cart = () => {
  const { Cart, totalPrice} = useCartContext();
  const order = {
    buyer : {
      name: 'juan',
      email: 'juansito@gmail.com',
      phone: '1231231',
      address: 'calle falsa'
    }
    Items: Cart.map(products => ({id: products.id, title: products.title,price: products.price, quantity: products.quantity})),
    total: totalPrice() ,
  }

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
      <button>Comprar</button>
    </>
  )
}
export default Cart
