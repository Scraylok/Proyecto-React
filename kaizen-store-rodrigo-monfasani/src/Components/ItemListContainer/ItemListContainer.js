import React from "react";
import "./StylesItemList.css";
import KaizenLogo from "../../Assests/Kaizen.png"

const  ItemListContainer = ({Greeting, Logo}) => {
    return (
    <div className="landing">
        <span>{Greeting}</span>
        <img src={KaizenLogo} alt="Logo" className="Logo-landing" />
    
    </div>
    )
}
export default ItemListContainer