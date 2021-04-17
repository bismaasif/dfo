import React from 'react';
import './ProductCard.css'


const ProductCard=({...d})=>{
    var{Name}=d;
    return(
        <>
        <div style={{fontSize:"62.5%"}}>

    
        <div className="product_card">
<div className="col">
        <div className="product_card_image">
             

             </div>
             <p className="head">{Name}</p><br/>
             </div>
        </div>
        </div>
        </>

        )
}
export default ProductCard;