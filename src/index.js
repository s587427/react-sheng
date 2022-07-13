import React from "react";
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import './css/index.css'
import store from './redux/store'
import App from './App.jsx'
import Hookform from "./components/demo/Hookform.jsx";
import Memo from './components/hook/Memo.jsx';
import Ref from './components/hook/Ref.jsx';
import Reducer from './components/hook/Reducer.jsx';
const runenvirement = process.env.NODE_ENV
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


root.render(
    <Provider store={store}>
        <BrowserRouter>
            <>
                {/* <App/> */}
                {/* <Hookform/> */}
                {/* <Memo /> */}
                {/* <Ref /> */}
                <Reducer/>
            </>
        </BrowserRouter>
    </Provider>
)

//ver.18以下寫法
// ReactDOM.render(
//     <App/>, document.getElementById('root')
// )




