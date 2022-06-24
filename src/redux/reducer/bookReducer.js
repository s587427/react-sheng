import { createAction} from '@reduxjs/toolkit'
//const increment = createAction('increment')
//example increment() = { type: 'increment', payload: 'undifne'}

export const addbook = createAction('addbook')
export const getbook = createAction('getbook')

const initialState = [{
    key: 1,
    bookName: '洋蔥',
    price: 200,
    author: 'sheng',
},{
    key: 2,
    bookName: '刃牙',
    price: 8591,
    author: '藤子不二雄',
},]

const bookReducer = (state= initialState, action)=>{
    switch (action.type) {
        case addbook:         
          return state 
        default:
            return state
    }
}

export default bookReducer;