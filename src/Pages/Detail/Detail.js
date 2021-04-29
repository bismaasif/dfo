
import React from 'react';
import img from './../../images/Rectangle1crop2bg.png';
import img2 from './../../images/howtousebg.png';
import img3 from './../../images/Ellipsebg1.png';
import img4 from './../../images/vectorbg1.png';
import img5 from './../../images/nobg.png';
import img6 from './../../images/no1bg.png';
import img7 from './../../images/no2bg.png';
import img8 from './../../images/fulls1.png';
import img9 from './../../images/desboxbg.png';
import img10 from './../../images/bg.png';
import img1 from './../../images/playbtnbg.png'
import it from './../../images/newvideo.png'
import './Detail.css';

const Detail=()=>{
    return(
        <>
        
<div className="red">
        <div className="cont">
            
            <div className="first">
           <img src={img8} />
           </div>
          
           <div className="no1">
                 <img src={img5} />
                 
                </div>
                <div className="no2">
                 <img src={img6} />
                </div>
                <div className="no3">
                 <img src={img7} />
                </div>
                <div className="write">
                    <img className="opacity" src={img9}/>
                    <div className="content"> 
                    <h2><b>Pick any</b></h2>
                     <h2><b> brand/offer that</b></h2>
                    <h2><b> you wish to use</b></h2>
                      </div>
                      </div>

                      <div className="write1">
                    <img className="opacity" src={img9}/>
                    <div className="content"> 
                    <h2><b>Show it to the</b></h2>
                     <h2><b> vendor to utilize</b></h2>
                    <h2><b> the offer</b></h2>
                      </div>
                      </div>

                      
                      <div className="write2">
                    <img className="opacity" src={img9}/>
                    <div className="content"> 
                    <h2><b>Enjoy huge savings</b></h2>
                     <h2><b> on all the things</b></h2>
                    <h2><b> that you love</b></h2>
                      </div>
                      </div>
                     
                         
                      
        </div>

<div className="video">
  <img className="image3" src={it}/>
  <img className="playbtn" src={img1}/>
  <br/>
  <br/>

</div>
</div>
</>
        
        
        
        )
}

export default Detail;