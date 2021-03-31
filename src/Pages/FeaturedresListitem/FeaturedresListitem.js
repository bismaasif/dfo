const FeaturedresListitem=({...info})=>{
   
   console.log(info.data.data)
    return(
        <>
    
       <h3>{info.data.data[0].Name}</h3>
       <h3>{info.data.data[0]._id}</h3>
       <h3>{info.data.data[0].ratings.ratings}</h3>
       <h3>{info.data.data[0].location}</h3>
        
       <h3>{info.data.data[1].Name}</h3>
       <h3>{info.data.data[1]._id}</h3>
       <h3>{info.data.data[1].ratings.ratings}</h3>
       <h3>{info.data.data[1].location}</h3>

       <h3>{info.data.data[2].Name}</h3>
       <h3>{info.data.data[2]._id}</h3>
       <h3>{info.data.data[2].ratings.ratings}</h3>
       <h3>{info.data.data[2].location}</h3>

       <h3>{info.data.data[3].Name}</h3>
       <h3>{info.data.data[3]._id}</h3>
       <h3>{info.data.data[3].ratings.ratings}</h3>
       <h3>{info.data.data[3].location}</h3>
       
      
       <h2></h2>
       
        </>
        )
}
export default FeaturedresListitem;