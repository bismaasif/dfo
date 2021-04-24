import React, { useEffect } from 'react';
import './Allrestaurant.css';
import axios from "axios";
import { connect } from 'react-redux';
import AllrestaurantList from '../AllrestaurantList/AllrestaurantList';
import imgp from './../../images/back1.png';
import { Link } from 'react-router-dom';
import './Allrestaurant.css'


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
        <hr className="new"></hr>
        <div className="res">
<div className="fs1">All Restaurants</div>
<br/>
       
        <AllrestaurantList/>

        {/* <br/>
        <br/> */}
        
        {/* <br/> */}
        {/* <Link to="/"><div className="button1"><img src={imgp}/></div></Link> */}
        </div>
        {/* <hr className="new"/><br/> */}
        <br/>
        <br/>
        <br/>
        </>
        )
}
var mapState=(state)=>({
    item1:state.allproduct
})
export default connect(mapState) (Allrestaurant);