import './App.css';
import React from "react";
import {Switch,Route, BrowserRouter} from 'react-router-dom';
import Footer from './Component/Footer/Footer';
import Navbar from './Component/Navbar/Navbar';
import Detail from './Pages/Detail/Detail';
import Buynow from './Pages/Butnow/Buynow';
import Home from './Pages/Home/Home';
import Featuredres from './Pages/Featuredrest/Featuredrest';
import Allrestaurant from './Pages/Allrestaurant/Allrestaurant';
import ProductCard from './Component/ProductCard/ProductCard';
import Howtouse from './Pages/Howtouse/Howtouse';
import test from './Pages/test/test';
import Practice from './Component/Practice/Practice';
import confirmemail from './Pages/confirmemail/confirmemail';






const App=()=>{
    return(
<>

<Practice/>

<Switch>
    <Route path="/" component={Home}exact/>
    <Route path="/howtouse" component={Detail} exact/>
    <Route path="/buynow" component={Buynow} exact/>
    <Route path="/footer" component={Footer}exact/>
    <Route path="/featuredres" component={Featuredres} exact/>
    <Route path="/allres" component={Allrestaurant} exact/>
    <Route path="/product" component={ProductCard} exact/>
    <Route path="/slider" component={Howtouse} exact/>
   
    <Route path="/practice" component={Practice} exact/>



    <Route path="/emailconfirmation/profile/user/:id/:token" component={confirmemail} exact/>

    <Route path="/profile/user/:id/:token/newpassword" component={test} exact/>
 
</Switch>













</>


        )
}

export default App;