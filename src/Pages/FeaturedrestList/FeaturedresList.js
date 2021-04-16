import { useEffect } from 'react';
import { connect } from 'react-redux';
import FeaturedresListitem from '../FeaturedresListitem/FeaturedresListitem';
import Featuredrest from '../Featuredrest/Featuredrest';
import {specifiedproduct,allproducts} from './../../Redux/SpdProduct/SpdProductActions';
import './FeaturedresList.css'

const FeaturedresList=({specifiedproduct,items})=>{
    
    console.log(items)
    useEffect(()=>{
specifiedproduct();



    },[])
    return(
        <>
        <div className="list">

        
{items.map((info)=><FeaturedresListitem key={info.info} {...info}/>)}
</div>
        </>
        )
}
var mapState=(state)=>({
    items:state.spdproduct
})
var actions={
    specifiedproduct,
    
}
export default  connect(mapState,actions)( FeaturedresList);