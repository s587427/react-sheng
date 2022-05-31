import React from 'react'
import { useParams } from 'react-router-dom'
import {getInvoice} from './data.js'

const InvoicesDetail = ()=>{
    // 使用react-router-dom裡面的useParams函數如 params = useParams(), params.{接受的參數} ex params.invoiceId
    let params = useParams()
    let invoice = getInvoice(parseInt(params.invoiceId, 10));
    return(
        <main className="p-5">
            <h2>Total Due: {invoice.amount}</h2>
            
            <p> {invoice.name}: {invoice.number} </p>

            <p>Due Date: {invoice.due}</p>
        </main>
    )
}
export default InvoicesDetail