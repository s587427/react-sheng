import React from "react";
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import './css/index.css'
import store from './redux/store'
import App from './App.jsx'
import Hookform from "./App-react-hook-form.jsx";
import * as sagasfn from "./test.js"
import {importAll} from './lib/ggg'


const {part} = importAll(require.context('./lib', false, /[^index]\.js$/))

console.log(part)


const runenvirement = process.env.NODE_ENV
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

//console.log(yield all[...Object.values(sagasfn)])

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
            {/* <Hookform/> */}
        </BrowserRouter>   
    </Provider>
)

//ver.18以下寫法
// ReactDOM.render(
//     <App/>, document.getElementById('root')
// )




