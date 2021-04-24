import React, { useEffect } from 'react';
import axios from "axios";
import { connect } from 'react-redux';
import FeaturedresList from '../FeaturedrestList/FeaturedresList';
import { Link } from 'react-router-dom';
import './Featuredrest.css';
import img1 from './../../images/smbg2.png'

const Featuredres=({items})=>{
    useEffect(()=>{

      async  function getData(){
              const products = await axios.get('http://deeefoobackend.herokuapp.com/api/restaurant/getAllFeatured?pageNo=1&size=4');
              console.log(products.data.data[0].Name);

        
        }
        getData();
    }
    ,[])
    return(
        <>
       
         <hr className="new"></hr>
         <h2 className="fs">Featured Restaurants</h2>
        <div className="res">
        <FeaturedresList/>
        
        </div>
        {/* <hr className="new"/>
        <div className="button"></div> */}
        
        </>
        )
}
var mapState=(state)=>({
    items:state.spdproduct
})
export default connect(mapState) (Featuredres);