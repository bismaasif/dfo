import './confirmemail.css';
import Footer from '../../Component/Footer/Footer';
import { confirmemailhere} from './../../Utility/Utility.js'
const confirmemail=()=>{
        const urll= window.location.href;
        console.log(urll);
        var param=urll.split("/");
       
        console.log(param[6]);
        console.log(param[7]);
        
//         var params;
// for (var i=0;i<urll.length;i++) {
//     params = urll[i].split("/");
    
// }
// console.log(params[5]);
// const id=this.props.match.params.token;
// console.log(id)

var submitit=(e)=>{
        e.preventDefault();
        confirmemailhere(param[6],param[7]);
        
}
    return(
        <>
        <div className="fill">
        <div className="txt">
<b>Please confirm your Email!</b>
<button  type="submit" onClick={submitit} className="email-btn"><b>Confirm Email</b></button>
        </div>
        </div>
       <Footer/>
        </>
        )
}
export default confirmemail;