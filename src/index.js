import React from "react";
import {createRoot} from 'react-dom/client';
import './css/index.css'
import store from './redux/store'
import {Provider} from 'react-redux'
import App from './App.jsx'


const runenvirement = process.env.NODE_ENV
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
)

//ver.18以下寫法
// ReactDOM.render(
//     <App/>, document.getElementById('root')
// )




