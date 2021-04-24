
import { token_user } from "./UserConstants";

var initialstate=[];
var UserReducer=(state=initialstate,action)=>{
    var {type,payload}=action;
    switch (type) {
      case token_user:
          return [...state,payload.user]
        
     default:
      return state;
    }
}
export default UserReducer;