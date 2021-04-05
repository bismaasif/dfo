import { useEffect } from 'react';
import { connect } from 'react-redux';
import AllresListitem from '../AllresListitem/AllresListitem';
import {allproducts} from './../../Redux/Allproduct/AllproductActions';


const AllrestaurantList=({item1,allproducts})=>{
    console.log(item1);
    useEffect(()=>{
        allproducts();
        
        
            },[])
    return(
        <>
        <div className="list">
    {item1.map((info)=><AllresListitem key={info._id} {...info}/>)}
    </div>
        </>
        )
}
var mapState=(state)=>({
    item1:state.allproduct
})
var actions={
    allproducts,
    
}
export default  connect(mapState,actions)( AllrestaurantList);