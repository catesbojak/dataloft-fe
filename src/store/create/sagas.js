import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

import {
  CREATE_FFS_REQUEST
} from './actions'

function* createFFSRequest(payload, meta) {
  const { address } = payload
  console.log('you are here')
  console.log(address)
  

}

function* watchCreateFFSRequest({ payload, meta}) {
  yield call(createFFSRequest, payload, meta)
}

export default function* sagas() {
  yield takeEvery(CREATE_FFS_REQUEST, watchCreateFFSRequest)
}