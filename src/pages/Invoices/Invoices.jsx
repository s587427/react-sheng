import React from 'react'
import { Link,  Outlet, NavLink, useSearchParams } from 'react-router-dom'  //NavLink可以定義當前活動的樣式
import {getInvoices} from './data.js'


const Invoices = ()=>{
    let invoices = getInvoices()
    //useSearchParams. 它的工作原理很像React.useState()
    let [searchParams, setSearchParams] = useSearchParams();
    return (
        <div className="flex mt-5">
            <nav
            style={{
                borderRight: "solid 1px",
                padding: "1rem",
            }}
            >
            {/* 
                1.使用searchParams.get('Key Name') ex:searchParams.get("filter") = ...url?filter=
                2.使用setSearchParams({keyname: value}) ex:etSearchParams({ filter: '7777' }) = ...url?filter=7777 */
            }
            <input
                value={searchParams.get("filter") || ""}
                className = "border-2 border-red-600"
                onChange={(event) => {
                    let filter = event.target.value;
                    if (filter) {
                        setSearchParams({ filter: filter });
                    } else {
                        setSearchParams({});
                    }
                }}
            />   
            {/* Link到NavLink做了3件事
                1.我們將它style從一個簡單的對象更改為一個返回對象的函數
                2.我們通過查看傳遞給樣式函數的isActive值來更改鏈接的顏色
                3.你可以用className 做同樣的事情 <NavLink className="red" /> or <NavLink className={({ isActive }) => isActive ? "red" : "blue"} />
             */}
            {invoices
                .filter((invoice) => {
                    let filter = searchParams.get("filter");
                    if (!filter) return true;
                    let name = invoice.name.toLowerCase();
                    //判斷此字串執行個體是否以指定的字元開頭。
                    return name.startsWith(filter.toLowerCase());
                })
                .map((invoice) => (
                    <NavLink
                        style={({ isActive })=>{
                            return {
                                display: "block",
                                margin: "1rem 0",
                                color: isActive ? "red" : "",
                            };
                        }}
                        to={`/invoices/${invoice.number}`}
                        key={invoice.number}
                    >
                        {invoice.name}
                    </NavLink>
                ))}
          </nav>
          {/* 使用Outlet組件將嵌套組件渲染出來 */}
          <Outlet />
        </div>
      );
}

export default Invoices