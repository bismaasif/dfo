import Footer from "../../Component/Footer/Footer"
import Buynow from "../Butnow/Buynow"
import Detail from "../Detail/Detail"
import Featuredrest from "../Featuredrest/Featuredrest"
import './Home.css'

const Home=()=>{
    return(
        <>

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