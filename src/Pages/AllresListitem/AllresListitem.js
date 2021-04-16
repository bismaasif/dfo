import ProductCard from "../../Component/ProductCard/ProductCard";
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

const AllresListitem=({...info})=>{
    var data1=[];
    data1=info.data;
    console.log(data1);
    
      return(
 <div>
  {console.log(data1)}

  

  <div className="listitem">
 
            {/* {data1.((dmap)=> <h3>{d.Name}<br/> {d._id}<br/>......</h3>)} */}
            {data1.map((d1)=><ProductCard {...d1}/>)}
            </div>


            </div>
      )
}
export default AllresListitem;