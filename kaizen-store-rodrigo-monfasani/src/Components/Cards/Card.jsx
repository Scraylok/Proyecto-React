import React from 'react';
import { useState } from 'react';
import imgCard from "../../Assests/Store/sovereign-skins.jpg"

export const Card = ({stock,name,initial}) => {

   
    const [amount, setAmount] = useState(0)
    const count = (value) => {
        const result = amount + value
        if(result<=stock){
            setAmount(amount+value)
            
        }
        
    }

    return (
        <section className='container  bg-dark border'>
              <h3 className='py-3  m-2 text-white'>{name}</h3>

               <img className='img-thumbnail' src={imgCard} alt="Skin" />

               <h4>Precio: $<span className='price'>50</span></h4>

               <div className='d-flex flex-row display-3 align-center justify-content-between text-white bold'>

                 <button className="btn btn-danger p-5 fw-bold display-3" disabled={amount <=0} onClick={()=>count(-1)}>-</button>
                 <span className='d-flex flex-row'>{amount} | {stock}</span>
                 <button className="btn btn-success p-5 fw-bold display-3" onClick={()=>count(+1)}>+</button>

               </div>
        </section>
    );
};

