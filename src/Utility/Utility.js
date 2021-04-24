import axios from "axios";

export const confirmemailhere = (userId,token) => {
    return axios.patch(`http://deeefoobackend.herokuapp.com/api/user/${userId}`,{
        emailconfirmation:true
    },{
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then((response)=>{
        return response;
    })
    .catch((err)=>{
        console.log(err)
        alert("Unable to confirm your email")
    })
}