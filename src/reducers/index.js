import { combineReducers } from 'redux';
import GifReducer from './GifReducer';


export default combineReducers({

  gifObjects: GifReducer
  
});
