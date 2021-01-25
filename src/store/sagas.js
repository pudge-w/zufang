/* eslint-disable */
import { takeEvery, put, call } from 'redux-saga/effects'

import { getCity, getArea } from '@/utils/api'

function * getCity1 () {
  const res = yield call(() => {
    return getCity()
  })
  if (res) {
    yield put({
      type: 'GETCITY',
      payload: res.result
    })
  }
}

function * getArea1 (action) {
  const res = yield call(() => {
    return getArea(action.payload)
  })
  if (res) {
    yield put({
      type: 'GETAREA',
      payload: res.result
    })
  }
}

function* mySaga () {
  // 监听对应的action， 每次触发dispatch都会触发
  yield takeEvery('GET_CITY', getCity1);
  yield takeEvery('GET_AREA', getArea1);
}

export default mySaga