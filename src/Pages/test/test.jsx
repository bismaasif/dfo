import React, { useState } from 'react';
import Footer from '../../Component/Footer/Footer';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import imgf from './../../images/form.png';

import './test.css';
const Test=()=>{
  var [Pass,Setpass]=useState("");
  var [Cpass,Setcpass]=useState("");
  var submitform=(e)=>{
  
    e.preventDefault();
     var password={
         Pass,Cpass
     }
     console.log(password)
 }
 const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
  
  
    const classes = useStyles();
    return(
        <>
        <div className="cotx">
<img  classname="hfak" src={imgf} />
            <div className="formq">
<form onSubmit={submitform}>
{/* <input placeholder="password" 
            type="text" 
            value={Pass} 
            onChange={(e)=>Setpass(e.target.value)} /> */}
            <br/>
            <br/>
            <TextField
        id="filled-secondary"
        label="New Password"
        variant="filled"
        color="secondary"
        type="password" 
        value={Pass} 
        onChange={(e)=>Setpass(e.target.value)} 
        
      />
{/* <input placeholder=" confirm password" 
            type="text" 
            value={Cpass} 
            onChange={(e)=>Setcpass(e.target.value)} />
            <br/> */}
<br/>
<br/>
<TextField
        id="filled-secondary"
        label="Confirm Password"
        variant="filled"
        color="secondary"
        type="password" 
        value={Cpass} 
        onChange={(e)=>Setcpass(e.target.value)}
      />
      <br/>
      <br/>
      <br/>
      <br/>

{Pass===Cpass && Pass ? <button className="b1" enabled type="submit" >Submit</button>: <button className="b2" disabled type="submit">Submit</button>}

 
    </form>
    </div>
    </div>
    <Footer/>
    
    
            </>
            )
}

export default Test;