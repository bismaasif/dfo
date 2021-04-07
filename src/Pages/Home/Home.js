import Footer from "../../Component/Footer/Footer"
import Buynow from "../Butnow/Buynow"
import Detail from "../Detail/Detail"
import Featuredrest from "../Featuredrest/Featuredrest"
import Howtouse from "../Howtouse/Howtouse"
import './Home.css'

const Home=()=>{
    return(
        <>
<Howtouse/>
        <Detail/>
      
        <div className="color">
            <Featuredrest/>
        <Buynow/>
        <Footer/>
        </div>



        
        
        </>
        )
}
export default Home;