import './Buynow.css';
import imgz from './../../images/buy.png';
import imgy from './../../images/googleplay.png';
import imgx from './../../images/googleform.png';
const Buynow=()=>{
    return(
        <>

    <div container="cot">
   <img  className="size" src={imgz}/>
 

    </div>
    <div className="flex">
  <img className="play" src={imgy}/>
  <img className="form" src={imgx}/>
  </div>
        </>
    )
}
export default Buynow;