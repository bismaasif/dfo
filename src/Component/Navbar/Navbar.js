import './Navbar.css';
const Navbar=()=>{
    return(
        <>
        <div className="Navbar">
        <div className="logo">
            
            <h1>DEEEFOO</h1> 
           
        
        </div>
       
        <div className="navitemcontainer">
            <div className="navitem">
                
                <h4 >HOME</h4>
               
                </div>
            <div className="navitem">
                
                <h4>Featured restaurants</h4>
               
                </div>
                <div className="navitem">
                
                <h4>How To Use</h4>
               
                </div>

                <div className="navitem">
                
                <h4>Details</h4>
               
                </div>
            
        </div>
        
        </div>
        
       
        </>
    )
}
export default Navbar;