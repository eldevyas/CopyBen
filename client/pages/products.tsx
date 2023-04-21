import React from "react";
import  '../styles/pages/_produits.scss';


export default function produits() {
    
    return (
        <div >
            <p>Super Promo <small>(NOS SUPERS PROMOTIONS)</small></p>
            <div style={{display:"flex"}}>
                <div style={{backgroundColor:"blue",float:"left",width:"400px"}}>
                <h1>left</h1>
                </div>
            <div style={{width:"600px"}}>
            <h1>center</h1>
            <label></label>
            <input type="text" />
            </div>
            <div style={{backgroundColor:"black",float:"right",width:"400px",color:"white"}}>
            <h1>right</h1>
            </div>
            </div>
        </div>);
       
       
}
