/* eslint-disable */
import { combineReducers } from 'redux-immutable';
import cityReducer from '../cities/reducer';
import tabReducer from '../home/rent/ui/reducer';

const reducer = combineReducers({
  cityReducer,
  tabReducer
})

export default reducer;