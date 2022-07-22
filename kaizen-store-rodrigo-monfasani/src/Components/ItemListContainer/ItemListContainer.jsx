import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './StylesItemList.css'
import { useState, useEffect } from "react";
import ItemList from '../itemList/ItemList';
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { getDocs, collection, query } from "firebase/firestore";


import { getProds } from "../../Mocks/fakeApi";




 export const ItemListContainer = ({}) => {
    

  
    const [productsList, setProductsList] =useState([]);
    const [loading, setLoading]=useState(true);

    const { categoryId } = useParams();
   

    useEffect(() => {

        const productsCollection = collection(db, 'products');
        getDocs(productsCollection)
        .then(result =>{
            const list = result.docs.map(product =>{
                return {
                    id: product.id,
                    ...product.data(),
                } 
                    
            })
            setProducts(list);
        })

        // setLoading(true);
        // getProds(categoryId)
        //     .then((res) => {
        //         setProductsList(res);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     })
        //     .finally(() => {
        //         setLoading(false);
        //     });
    }, [categoryId]);
    
   
    return (
        <>
        
        {loading ? <p>Cargando...</p> : <ItemList productsList={productsList}/>};
        
        
        </>
    )
}

export default ItemListContainer    