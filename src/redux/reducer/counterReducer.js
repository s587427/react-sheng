//reduxjs/toolkit 寫法

import { createAction, createReducer } from '@reduxjs/toolkit'

 const increment = createAction('increment')
//example increment() = { type: 'increment', payload: 'undifne'}
 const decrement = createAction('decrementt')
//example decrement() = { type: 'decrement', payload: 'undifne'}

const initialState = { value: 0 }
export {increment, decrement}
export default createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {   //addCase(actionCreatorOrType, reducer).
      state.value+= action.payload
    })
    .addCase(decrement, (state, action) => {
      state.value-= action.payload
    })
})

// 基礎型寫法
// export default (state = 0, action) => {
//     switch (action.type) {
//         case 'INCREMENT':
//             return state + 1
//         case 'DECREMENT':
//             return state - 1
//         default:
//             return state
//     }
// }