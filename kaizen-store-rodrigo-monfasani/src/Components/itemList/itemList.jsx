import React from 'react';
import Item from '../Item/Item';
import './StyleItemList.css'

const ItemList = ({productsList}) => {
    
        return (
            <div className=''>
                 <h3>Lista de productos</h3>
                 <div className='card-container'>
                     {productsList.map((products) =><Item key={products.id} products={products}/>)}
                 </div>
            </div>
        );
    
}

export default ItemList;