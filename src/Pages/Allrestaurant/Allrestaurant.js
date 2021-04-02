import React, { useEffect } from 'react';
import axios from "axios";
import { connect } from 'react-redux';
import AllrestaurantList from '../AllrestaurantList/AllrestaurantList';

const Allrestaurant=()=>{
  
    useEffect(()=>{

        async  function getData(){
                const products = await axios.get('http://deeefoobackend.herokuapp.com/api/restaurant/allrestaurants');
                console.log(products);
  
          
          }
          getData();
      }
      ,[])
    return(
        <>
        <AllrestaurantList/>
        </>
        )
}
var mapState=(state)=>({
    item1:state.allproduct
})
export default connect(mapState) (Allrestaurant);