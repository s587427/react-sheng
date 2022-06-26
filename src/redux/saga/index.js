/*
 Saga輔助函數
    1.takeEvery(pattern, saga, ...ags) 一起使用不會阻塞
        使用 takeEvery('*')（完全匹配的模式 *）不論它是什麼類型，我們都可以捕捉到所有被 dispatch 的 action。
    2.takeLatest(pattern, saga, ...ags) 一起使用不會阻塞
    3.throttle(pattern, saga, ...ags)
    這三個輔助函數都是用來監聽action
    只要action發送過來了,就會觸發對應的 saga函數調用

    Effect 函數
        select(selector) 獲取state
        call(fn, ...args) call 不只可以調用一個 function 並回傳 Promise，我們也可以用來調用其他的 Generator function
        take(pattern) 阻塞到action匹配到
        put(action) 等價於dispatch action
        all 副作用函數來同時運行多個saga all[sagafn(), sagafn2(), ...]
 */

import {all} from "redux-saga/effects"
import { bookSaga, bookSagaMutipleTake} from "./bookSaga"

export function* rootSaga(){
    yield all([
        bookSaga(),
        bookSagaMutipleTake()
    ])
} 

