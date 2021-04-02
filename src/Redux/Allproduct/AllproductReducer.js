import { allproductset, product_set } from "./AllproductConstants";

var initialstate=[];
var AllproductReducer=(state=initialstate,action)=>{
    var {type,payload}=action;
    switch (type) {
      
        case allproductset:
          return[...state,payload.allproducts]
     default:
      return state;
    }
}
export default AllproductReducer;