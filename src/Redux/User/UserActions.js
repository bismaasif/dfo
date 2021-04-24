import axios from "axios";
import { useState } from "react";
import { token_user } from "./UserConstants";


export var usertoken=()=>async(dispatch)=>{
 
try {
  ///api/restaurant/allrestaurants
  //http://deeefoobackend.herokuapp.com/api/restaurant/allrestaurants
  //http://deeefoobackend.herokuapp.com/api/restaurant/getAllFeatured?pageNo=1&size=4
   // var fetch =require(`http://deeefoobackend.herokuapp.com/api/restaurant/getAllFeatured?pageNo=${page}&size=${size}`);

  //  async function getData(){
    
  const user =await axios.get('http://deeefoobackend.herokuapp.com/api/user/:userId');
 // var products=[];
 //{ query.forEach((product)=>{products.push({...product.data()})})}
//getData();
console.log(user);
      

 
dispatch({
   type:token_user,
    payload:{
      user
        }
          })

}

catch (error) {
    console.log(error);
    
}
}
