import React from "react";
import "./Styles.css"

const itemsNav =  [

    {
        Id:1,
        label:"Juegos",
    },
    {
        id:2,
        label:"Monedas"
    },
    {
        id:3,
        label:"Skins",
    },
    {
        id:4,
        label:"Merchandising",
    }
]

const Navbar = () => {
    return { 
        <div>
        <img className="nav-logo" src="../../Assests/Kaizen.png" alt="">

            <div>
            {itemsNav.map((item)=> (
                <a href="/" className="nav-item" key={item.id} >{item.label}</a>

            ))}
            </div>
        </div>

}}
export default Navbar