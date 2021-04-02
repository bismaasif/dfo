import React, { useEffect } from 'react';
import axios from "axios";
import { connect } from 'react-redux';
import FeaturedresList from '../FeaturedrestList/FeaturedresList';
import { Link } from 'react-router-dom';

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
        <FeaturedresList/>
        <Link to="/allres"><button>see more</button></Link>
    
        
        </>
        )
}
var mapState=(state)=>({
    items:state.spdproduct
})
export default connect(mapState) (Featuredres);