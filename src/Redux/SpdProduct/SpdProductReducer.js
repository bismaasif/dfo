import {  product_set } from "./SpdProductConstants";

var initialstate=[];
var SpdProductReducer=(state=initialstate,action)=>{
    var {type,payload}=action;
    switch (type) {
      case product_set:
          return [...state,payload.products]
        
     default:
      return state;
    }
}
export default SpdProductReducer;