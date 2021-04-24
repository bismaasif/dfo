import {  allproductset, product_set } from "./SpdProductConstants";
import axios from "axios";
import { useState } from "react";


export var specifiedproduct=()=>async(dispatch)=>{
 
try {
  ///api/restaurant/allrestaurants
  //http://deeefoobackend.herokuapp.com/api/restaurant/allrestaurants
  //http://deeefoobackend.herokuapp.com/api/restaurant/getAllFeatured?pageNo=1&size=4
   // var fetch =require(`http://deeefoobackend.herokuapp.com/api/restaurant/getAllFeatured?pageNo=${page}&size=${size}`);

  //  async function getData(){
    
  const products =await axios.get('http://deeefoobackend.herokuapp.com/api/restaurant/allfeaturedrestaurants');
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

export var specifiedproductpage=()=>async(dispatch)=>{
 
  try {
    ///api/restaurant/allrestaurants
    //http://deeefoobackend.herokuapp.com/api/restaurant/allrestaurants
    //http://deeefoobackend.herokuapp.com/api/restaurant/getAllFeatured?pageNo=1&size=4
     // var fetch =require(`http://deeefoobackend.herokuapp.com/api/restaurant/getAllFeatured?pageNo=${page}&size=${size}`);
  
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
  


