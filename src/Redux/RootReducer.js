import {combineReducers} from 'redux'
import SpdProductReducer from './SpdProduct/SpdProductReducer';


var RootReducer= combineReducers({
    spdproduct: SpdProductReducer

})
export default RootReducer;