import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext'
import { ItemCart } from '../itemCart/itemCart';
import '../Cart/Cart.css';


const Cart = () => {
  // const [idPurchase, setIdPurchase] = useState("")
  const { cart, totalPrice} = useCartContext();
  const order = {
    buyer : {
      name: 'juan',
      email: 'juansito@gmail.com',
      phone: '1231231',
      address: 'calle falsa'
    },
    items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
    total: totalPrice(),
  }
  
  const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db,'orders');
    addDoc[ordersCollection,order]
    .then(({id}) =>console.log(id))
  }

  if (cart.lenght === 0){
    return (
      <>
      <p>No hay elementos en el carrito</p>
      <Link to='/'>Hacer compras</Link>
      </>
    );

  }
  return (
    <>
    <div className='cart_container'>

      {
        cart.map(product => <ItemCart key={product.id} product={product}/>)
      }
      <p>Total: {totalPrice()}</p>
      <button onClick={handleClick}>Comprar</button>
    </div>
    </>
  )
}
export default Cart