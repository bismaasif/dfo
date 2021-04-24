import {combineReducers} from 'redux'
import AllproductReducer from './Allproduct/AllproductReducer';
import SpdProductReducer from './SpdProduct/SpdProductReducer';
import UserReducer from './User/UserReducer';


var RootReducer= combineReducers({
    spdproduct: SpdProductReducer,
    allproduct: AllproductReducer,
    user: UserReducer

})
export default RootReducer;