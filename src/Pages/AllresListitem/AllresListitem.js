import ProductCard from "../../Component/ProductCard/ProductCard";
import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles, styled } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import './AllresListitem.css'

const AllresListitem=({...info})=>{
    var data1=[];
    data1=info.data;
    console.log(data1);
    var [size,setsize]=useState(4);
    var slice1=data1.slice(0,size);
    var fun=()=>{
          return(
                this.styled.display="none"
          )
    }
      return(
 
  <>

  

            <div className="listitem">
 
            {/* {data1.((dmap)=> <h3>{d.Name}<br/> {d._id}<br/>......</h3>)} */}
            {slice1.map((d1)=><ProductCard {...d1}/>)}
            
              </div>
            <br/>
            <br/>
            <br/>
           
            <hr className="new"></hr>
            
            {size<12 ? <button className="viewmore" onClick={()=>setsize=setsize(size+=4)}></button>:null}
{size===12 ? <button className="viewall" onClick={()=>setsize=setsize(data1.length)} ></button>: null}
     {size===data1.length ? <button className="viewless" onClick={()=>setsize=setsize(4)} ></button> :null}

    
     
           
           
            
      </>
            
      )
}
export default AllresListitem;