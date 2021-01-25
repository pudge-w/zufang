/* eslint-disable */
import { Map } from 'immutable';
const defaultState = Map({
  areaList: []
})

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'GETAREA':
      // return {
      //   ...state,
      //   areaList: action.payload
      // }
      return state.set('areaList', action.payload)
    default:
      return state
  }
}

export default reducer;