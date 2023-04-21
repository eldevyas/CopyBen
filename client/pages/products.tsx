import React from "react";
import  '../styles/pages/_produits.scss';


export default function produits() {
    
    return (
        <div >
            <p>Super Promo <small>(NOS SUPERS PROMOTIONS)</small></p>
            <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap"}}>
                <div style={{backgroundColor:"blue",float:"left",width:"30%"}}>
                    <h1>left</h1>
                </div>
                <div style={{width:"40%"}}>
                    <h1>center</h1>
                    <label></label>
                    <input type="text" />
                </div>
                <div style={{backgroundColor:"black",width:"30%",color:"white"}}>
                    <h1>right</h1>
                </div>
                </div>
        </div>);
       
       
}
