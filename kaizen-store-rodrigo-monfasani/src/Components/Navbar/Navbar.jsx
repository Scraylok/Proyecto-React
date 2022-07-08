import React from "react";
import "./Styles.css";
import kaizenLogo from "../../Assests/Kaizen.png"
import CartWidget from "../Cart/Cart";
import { NavLink } from "react-router-dom";

const itemsNav =  [

    {
        Id:1,
        label:"Juegos",
        route:"",
    },
    {
        id:2,
        label:"Monedas",
        route:"",
        
    },
    {
        id:3,
        label:"Skins",
        route:"",
    },
    {
        id:4,
        label:"Merchandising",
        route:"",
    }
]

const Navbar = () => {
    return (
        <div className="nav">
            <img className="nav-logo" src={kaizenLogo} alt="Kaizen logo" />
           
          
        

            <div className="nav-items">
            {itemsNav.map((item)=> (
                <NavLink to={itemsNav.id} className="nav-item " key={item.id} >{item.label}</NavLink>

            ))}
            </div>
            <CartWidget/>
        </div>

    )
}
export default Navbar