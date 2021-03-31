import { useEffect } from 'react';
import { connect } from 'react-redux';
import FeaturedresListitem from '../FeaturedresListitem/FeaturedresListitem';
import Featuredrest from '../Featuredrest/Featuredrest';
import {specifiedproduct} from './../../Redux/SpdProduct/SpdProductActions';

const FeaturedresList=({specifiedproduct,items})=>{
    console.log(items)
    useEffect(()=>{
specifiedproduct();

    },[])
    return(
        <>
{items.map((info)=><FeaturedresListitem key={info.info} {...info}/>)}
        </>
        )
}
var mapState=(state)=>({
    items:state.spdproduct
})
var actions={
    specifiedproduct
}
export default  connect(mapState,actions)( FeaturedresList);