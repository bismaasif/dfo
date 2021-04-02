import {  allproductset, product_set } from "./AllproductConstants";
import axios from "axios";
export var allproducts=()=>async(dispatch)=>{
    try {
      const allproducts=await axios.get('http://deeefoobackend.herokuapp.com/api/restaurant/allrestaurants');
      console.log(allproducts);
      
      dispatch({
        type:allproductset,
         payload:{
           allproducts
             }
               })
     
     
  
    } catch (error) {
      console.log(error)
    }
  }