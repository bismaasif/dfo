import './Navbar.css';
import { Link } from 'react-router-dom';
import DehazeIcon from '@material-ui/icons/Dehaze';
const Navbar=()=>{
    return(
        <>
        <div className="Navbar">
        <div className="logo">
            
            <h1>DEEEFOO</h1> 
           
        
        </div>
       
        <div className="navitemcontainer">
            <div className="navitem">
                <Link to="/">
                <h4 ><b>HOME</b></h4>
                </Link>
               
               
                </div>
            <div className="navitem">
                <Link to="/featuredres">
                <h4>Featured restaurants</h4>
                </Link>
                
               
                </div>
                <div className="navitem">
                <Link to="/buynow">
                <h4>Buy Now</h4>
                </Link>
                
               
                </div>

                <div className="navitem">
                
               < Link to="/howtouse"> <h4>How To Use</h4></Link>
               
                </div>
                <div class="check">
            <DehazeIcon/>
            </div>
        </div>
        
        </div>
       
       
        </>
    )
}
export default Navbar;