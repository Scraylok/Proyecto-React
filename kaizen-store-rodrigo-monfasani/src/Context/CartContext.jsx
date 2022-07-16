import React, {useState, useContext} from 'react'
import Item from '../Components/Item/Item'

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext)
 
const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addProduct = (Item, quantity) => {
        if (isInCart(Item.id)){
          setCart(cart.map(products => {
            return products.id === Item.id ? {...products, quantity: products.quantity + quantity} : products
          }))
        }else{
          setCart([...cart, [...Item, quantity]])
        }
    }

    const clearCart = () => setCart([])

    const isInCart = (id) => {return cart.find(products => products.id === id) ?true : false;}

    const removeProduct = (id) => setCart(cart.filter(products => products.id !== id))

  return (
    <CartContext.Provider value={{
        clearCart,
        isInCart,
        removeProduct,
        addProduct

    }}>
        {children}
    </CartContext.Provider>
  )
}
export default CartProvider
