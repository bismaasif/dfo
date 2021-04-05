import React, { useEffect } from 'react';
import axios from "axios";
import { connect } from 'react-redux';
import AllrestaurantList from '../AllrestaurantList/AllrestaurantList';
import imgp from './../../images/back1.png';
import { Link } from 'react-router-dom';

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
        <div className="res">

       
        <AllrestaurantList/>
        
        <Link to="/"><div className="button"><img src={imgp}/></div></Link>
        </div>
        </>
        )
}
var mapState=(state)=>({
    item1:state.allproduct
})
export default connect(mapState) (Allrestaurant);