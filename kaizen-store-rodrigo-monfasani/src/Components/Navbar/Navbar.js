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
    return (
        <div className="nav">
            <h1 className="nav-logo">Kaizen games</h1>
        

            <div>
            {itemsNav.map((item)=> (
                <a href="/" className="nav-item container__animacion" key={item.id} >{item.label}</a>

            ))}
            </div>
        </div>

    )
}
export default Navbar