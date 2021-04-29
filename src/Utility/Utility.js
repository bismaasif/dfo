import axios from "axios";

export const confirmemailhere = (userId,token) => {
   
    return axios.patch(`http://deeefoobackend.herokuapp.com/api/user/${userId}`,{
        emailConfirmation:true
    },{
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then((response)=>{
        alert("your email has been confirmed");
        
    })
    .catch((err)=>{
        console.log(err);
        alert("Unable to confirm your email")
    })
}



export const setnewpassword = (userId,token,password) => {
    console.log(userId);
    console.log(token);
    console.log(password);
    return axios.patch(`http://deeefoobackend.herokuapp.com/api/user/${userId}`,{
        password
    },{
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then((response)=>{
        alert("new password has been set");
    })
    .catch((err)=>{
        console.log(err);
        alert("Unable to set new password");
    })
}