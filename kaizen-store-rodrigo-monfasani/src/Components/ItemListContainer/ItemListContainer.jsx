import React from "react";
import { useState, useEffect } from "react";
import itemList from "../itemList/itemList";
import { ItemCount } from "../itemCount/ItemCount";

const products = [
    {id:'01', name:'random1', description: "Lorem ipsum dolor sit amet",   stock:5},
    {id:'02', name:'random2', description: "Lorem ipsum dolor sit amet",   stock:7},
    {id:'03', name:'random3', description: "Lorem ipsum dolor sit amet",   stock:2},
    {id:'04', name:'random4', description: "Lorem ipsum dolor sit amet",   stock:8},
    {id:'05', name:'random5', description: "Lorem ipsum dolor sit amet",   stock:3},
    {id:'06', name:'random6', description: "Lorem ipsum dolor sit amet",   stock:10},

]


export const ItemListContainer = ({}) => {
    const [productsList, setProductsList] =useState([])

    const getData = new Promise ((resolve, reject) => {
        let condition = true 
        setTimeout(() => {
            if(condition){
                resolve(products)
            }else{
                reject(console.log('algo salio mal'))
            }
        },3000)
    })
    useEffect(() => {
        getData
        .then((result) => setProductsList(result)) 
    },[])
    
    const onAdd = (quantity) => {
        console.log(`compraste ${quantity} unidades`);
    }
    return (
        <>
        <ItemCount initial={1} stock={4} onAdd={onAdd}/>
        <itemList productsList={productsList}/>
        </>
    )
}