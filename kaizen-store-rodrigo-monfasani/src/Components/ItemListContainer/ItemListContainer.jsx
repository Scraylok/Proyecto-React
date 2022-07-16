import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './StylesItemList.css'
import { useState, useEffect } from "react";
import ItemList from '../itemList/ItemList';

import { getData } from "../../Mocks/fakeApi";




 const ItemListContainer = ({}) => {
    

  
    const [productsList, setProductsList] =useState([])
    const [loading, setLoading]=useState(true)


    useEffect(() => {
        getData
        .then((result) => setProductsList(result))
        .catch((error)=>console.log(error))
        .finally(()=>setLoading(false)) 
    },[])
    
   
    return (
        <>
        
        {loading ? <p>Cargando...</p> : <ItemList productsList={productsList}/>}
        
        
        </>
    )
}

export default ItemListContainer    