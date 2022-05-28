import {configureStore } from '@reduxjs/toolkit'
import reducers from './reducer/reducers'
 
// We'll use redux-logger just as an example of adding another middleware
import logger from 'redux-logger'
// And use redux-batch as an example of adding enhancers
import { reduxBatch } from '@manaflair/redux-batch'

export default configureStore({
  reducer: reducers,  //The slice reducers were automatically passed to combineReducers()
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), // getDefaultMiddleware這個方法使可以用默認添加的middleware,concat則是添加客製化middleware使可以用默認添加的middleware組合客製化     
  devTools: process.env.NODE_ENV !== 'production',  //Redux DevTools 瀏覽器擴展的支持
  //preloadedState: {...data}, //要傳遞給 ReduxcreateStore函數的可選初始狀態值。 
  enhancers: [reduxBatch], // result => [applyMiddleware(預設), reduxBatch, devToolsExtension(預設)]  //可選的 Redux 存儲增強器數組，或用於自定義增強器數組的回調函數, 如果定義為數組，這些將被傳遞給Reduxcompose函數。

})

// The store has been created with these options:
// - The slice reducers were automatically passed to combineReducers()
// - redux-thunk and redux-logger were added as middleware
// - The Redux DevTools Extension is disabled for production
// - The middleware, batch, and devtools enhancers were composed together