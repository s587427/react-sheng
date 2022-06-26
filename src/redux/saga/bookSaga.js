import {take, takeEvery} from "redux-saga/effects"
import { addbook, getbook } from "../reducer/bookReducer"

export function* bookSaga(){
   yield takeEvery(addbook, function*(){
        console.log('saga監測到add')
     })
   yield takeEvery(getbook, function*(){
          console.log('saga監測到get')  
     })
   yield takeEvery([addbook, getbook], function*(){
          console.log('saga監測到get和add')  
     })
}

export function *bookSagaMutipleTake(){
     while(true){
          const action = yield take ([addbook, getbook]) // [anction1.type, anction2.type ]
          console.log(action)
     }
}