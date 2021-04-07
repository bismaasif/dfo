import './Footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import ProductCard from '../ProductCard/ProductCard';




const Footer=()=>{
    return(
        <>
       <div className="container">
           <div className="item1"></div>
           <div className="item2">
           <div className="contents">
           <b><h2>Deeeefoo</h2></b>
           
           <p className="para">eat the best</p>
           
           <hr className="new"/>
           <br/>
       </div>
           </div>
           <div className="item3"></div>
           <div className="item4">
               <h5><b>Localization</b></h5>
               <p>Sindh,Karachi,Pakistan</p>
           </div>
           <div className="item5">
               <h3><b>Opening hours</b></h3>
               
               <p>We work from Monday to Friday.</p>
               
               <p>From 9:00 AM to 8:30 PM</p>
           </div>
           <div className="item6">
           <h3><b>Social Media</b></h3>

           <div className="row">
               <h6>
<button className="bg"><FacebookIcon/></button>       <button className="bg"><InstagramIcon/></button>

      </h6>     
          </div>
           </div>
       </div>

     

        </>
        )
}
export default Footer;