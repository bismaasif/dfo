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
             <img className="cover" src={`http://deeefoobackend.herokuapp.com/api/img/${Name}.jpg`} />
             

             </div>
             <p className="head">{Name}</p><br/>
             {/* <br/>
             <br/> */}
             </div>
        </div>
        <br/> 
        <br/>
        </div>
        
        </>

        )
}
export default ProductCard;