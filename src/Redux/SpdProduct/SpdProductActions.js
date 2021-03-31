import {  product_set } from "./SpdProductConstants";
import axios from "axios";


export var specifiedproduct=()=>async(dispatch)=>{
try {
   // var fetch =require("http://deeefoobackend.herokuapp.com/api/restaurant/getAllFeatured?pageNo=1&size=4");

  //  async function getData(){
    
  const products =await axios.get('http://deeefoobackend.herokuapp.com/api/restaurant/getAllFeatured?pageNo=1&size=4');
 // var products=[];
 //{ query.forEach((product)=>{products.push({...product.data()})})}
//getData();
console.log(products);
      

 
dispatch({
   type:product_set,
    payload:{
      products
        }
          })

}

catch (error) {
    console.log(error);
    
}
}