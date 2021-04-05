import ProductCard from "../../Component/ProductCard/ProductCard";

const AllresListitem=({...info})=>{
    var data1=[];
    data1=info.data;
    console.log(data1)
    
      return(
 <div>
  {console.log(data1)}
  <div className="listitem">
            {/* {data1.((dmap)=> <h3>{d.Name}<br/> {d._id}<br/>......</h3>)} */}
            {data1.map((d1)=><ProductCard {...d1}/>)}
            </div>
            </div>
      )
}
export default AllresListitem;