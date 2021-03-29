import React, { useEffect } from 'react';
import axios from "axios";

const Featuredres=()=>{
    useEffect(()=>{
        async function getData(){
            const res =await axios.get('{{url}}/restaurant/getAllFeatured?pageNo=1&size=2');
            console.log(res);
        }
        getData();
    })
    return(
        <>
        
        </>
        )
}
export default Featuredres;