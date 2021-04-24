import { useState } from "react";
import { connect } from "react-redux";
import ProductCard from "../../Component/ProductCard/ProductCard";
import './FeaturedresListitem.css'
import {specifiedproductpage} from './../../Redux/SpdProduct/SpdProductActions';
const FeaturedresListitem=({specifiedproductpage,...info})=>{
   var data=[];
  data=info.data;
  
  var[size,setsize]=useState(4);
  var slice=data.slice(0,size);
  console.log(size)
  console.log(data.length)
    return(
        
        <div>
{console.log(data)}
         
          {/* {data.map((d)=> <h3>{d.Name}<br/> {d.location}<br/>......</h3>)} */}
          <div className="listitem">
       
      
          {slice.map((d)=> <ProductCard  {...d} key={d.Name}/>)}
          </div>
       {/* <button onClick={()=>{ setsize=setsize(size+=4)}
//          setsize=setsize+4;
//         <div className="listitem">
//  {slice.map((d)=> <ProductCard  {...d} key={d.Name}/>)}
//  </div>}
<br/> 

      }>view more</button> */}
      <br/>
      <br/>
      <hr className="new"></hr>
   {size>=data.length ? <button className="viewless" onClick={()=>{setsize(4)}}></button> : <button className="viewall" onClick={()=>{ setsize=setsize(data.length)}}></button>}
    {/*   <h3>{info.data.data[0].Name}</h3>
       <h3>{info.data.data[0]._id}</h3>
       <h3>{info.data.data[0].ratings.ratings}</h3>
       <h3>{info.data.data[0].location}</h3>
        
       <h3>{info.data.data[1].Name}</h3>
       <h3>{info.data.data[1]._id}</h3>
       <h3>{info.data.data[1].ratings.ratings}</h3>
       <h3>{info.data.data[1].location}</h3>

       <h3>{info.data.data[2].Name}</h3>
       <h3>{info.data.data[2]._id}</h3>
       <h3>{info.data.data[2].ratings.ratings}</h3>
       <h3>{info.data.data[2].location}</h3>

       <h3>{info.data.data[3].Name}</h3>
       <h3>{info.data.data[3]._id}</h3>
       <h3>{info.data.data[3].ratings.ratings}</h3>
    <h3>{info.data.data[3].location}</h3>  */}
    
      </div>
  
        )
       
}

var actions={
  specifiedproductpage
}
export default connect(null,actions)( FeaturedresListitem);