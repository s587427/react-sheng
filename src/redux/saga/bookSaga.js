import {takeEvery} from "redux-saga/effects"
import { addbook, getbook } from "../reducer/bookReducer"

export function* bookSaga(){
   yield takeEvery(addbook, function*(){
        console.log('saga監測到add')
   })
   yield takeEvery(getbook, function*(){
        console.log('saga監測到get')  
    })
}