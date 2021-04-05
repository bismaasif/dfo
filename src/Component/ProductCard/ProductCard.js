import React from 'react';
import './ProductCard.css'


const ProductCard=({...d})=>{
    var{Name}=d;
    return(
        <>
        <div style={{fontSize:"62.5%"}}>

    
        <div className="product_card">

        <div className="product_card_image">
             

             </div>
             <h2 className="head">{Name}</h2><br/>
            
        </div>
        </div>
        </>

        )
}
export default ProductCard;