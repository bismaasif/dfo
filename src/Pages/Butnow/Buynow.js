import './Buynow.css';
import imgz from './../../images/buy.png';
import imgy from './../../images/googleplay.png';
import imgx from './../../images/googleform.png';
import imgb from './../../images/pages.png';
import Allrestaurant from '../Allrestaurant/Allrestaurant';
const Buynow=()=>{
    return(
        <>
<div className="red">
    <div container="cot">
   <img  className="size" src={imgz}/>
 

    </div>
    <div className="flex">
  <img className="play" src={imgy}/>
  <img className="form" src={imgx}/>
  

  
<img className="size" src={imgb}/>

  </div>
  </div>

  {/* <div className="all" >
    <Allrestaurant/>
  </div> */}
        </>
    )
}
export default Buynow;