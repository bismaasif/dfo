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






const App=()=>{
    return(
<>

<Navbar/>
<Switch>
    <Route path="/" component={Home}exact/>
    <Route path="/howtouse" component={Detail} exact/>
    <Route path="/buynow" component={Buynow} exact/>
    <Route path="/footer" component={Footer}exact/>
    <Route path="/featuredres" component={Featuredres} exact/>
    <Route path="/allres" component={Allrestaurant} exact/>
    <Route path="/product" component={ProductCard} exact/>
 
</Switch>












</>


        )
}

export default App;