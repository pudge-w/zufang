/* eslint-disable */
import {Map} from 'immutable';
const defaultState = Map({
  cityList: []
})

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'GETCITY':
      // return {
      //   ...state,
      //   cityList: action.payload
      // }
      return state.set('cityList', action.payload)
    default:
      return state
  }
}

export default reducer;