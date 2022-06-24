import React from "react";
import "./Styles.css";
import kaizenLogo from "../../Assests/Kaizen.png"
import CartWidget from "../Cart/Cart";

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
    return (
        <div className="nav">
            <img className="nav-logo" src={kaizenLogo} alt="Kaizen logo" />
           
          
        

            <div className="nav-items">
            {itemsNav.map((item)=> (
                <a href="/" className="nav-item " key={item.id} >{item.label}</a>

            ))}
            </div>
            <CartWidget/>
        </div>

    )
}
export default Navbar