import React, {useState, useContext} from 'react'
import Item from '../Components/Item/Item'

const CartContext = React.createContext([])

export const useCartContext = () => useContext(CartContext)
 
const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addProdruct = (Item, newQuantity) => {
        const newCart = cart.filter( prod => prod.id !== Item.id)
        newCart.push({...Item, quantity: newQuantity})
        setCart(newCart)
    }

    const clearCart = () => setCart([])

    const isInCart = (id) => {return cart.find(products => products.id === id) ?true : false;}

    const removeProduct = (id) => setCart(cart.filter(products => products.id !== id))

  return (
    <CartContext.Provider value={{
        clearCart,
        isInCart,
        removeProduct,
        addProdruct

    }}>
        {children}
    </CartContext.Provider>
  )
}
export default CartProvider
