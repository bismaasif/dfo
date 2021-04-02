const AllresListitem=({...info})=>{
    var data1=[];
    data1=info.data;
    console.log(data1)
    
      return(
 <div>
  {console.log(data1)}
            {data1.map((d)=> <h3>{d.Name}<br/> {d._id}<br/>......</h3>)}
            </div>
      )
}
export default AllresListitem;