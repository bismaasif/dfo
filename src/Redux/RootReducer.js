import {combineReducers} from 'redux'
import AllproductReducer from './Allproduct/AllproductReducer';
import SpdProductReducer from './SpdProduct/SpdProductReducer';


var RootReducer= combineReducers({
    spdproduct: SpdProductReducer,
    allproduct: AllproductReducer

})
export default RootReducer;