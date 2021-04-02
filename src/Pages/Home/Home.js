import Footer from "../../Component/Footer/Footer"
import Buynow from "../Butnow/Buynow"
import Detail from "../Detail/Detail"
import './Home.css'

const Home=()=>{
    return(
        <>
        <Detail/>
      
        <div className="color">
        <Buynow/>
        <Footer/>
        </div>



        
        
        </>
        )
}
export default Home;