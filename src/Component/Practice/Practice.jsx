import React from 'react';
import './Practice.css';
import { Link } from 'react-router-dom';
import logo from './../../images/logo.png';
import DehazeIcon from '@material-ui/icons/Dehaze';
const Practice=()=>{
    return(
        <>
        <nav>
      <input type="checkbox" id="check"/>
      <label for="check" class="checkbtn">
       <DehazeIcon/>
      </label>
      <label class="logo"> <img className="logo2" src={logo} /></label>
      <ul>
        <li><a class="active" href="#">
        <Link to="/">
            Home
                </Link>
            </a></li>
        {/* <li><a href="#">
           
            <Link to="/featuredres">
            Featuerd Restaurants
                </Link>
                
            </a></li> */}
        <li><a href="#">
            
            < Link to="/howtouse"> How To Use</Link>
            </a>
            </li>
        <li><a href="#">
        <Link to="/buynow">
        Contact</Link></a></li>
                
        
      </ul>
    </nav>
    </>
        )
}
export default Practice;