import {  product_set, product_set_page } from "./SpdProductConstants";

var initialstate=[];
var SpdProductReducer=(state=initialstate,action)=>{
    var {type,payload}=action;
    switch (type) {
      case product_set:
          return [payload.products]
        case product_set_page:
          return [payload.products]
     default:
      return state;
    }
}
export default SpdProductReducer;