import React,{ createContext, useReducer } from "react";
import TransactionReducer from './transReducer'
const initialTrans = [
    {amount:500, desc: "Cash"},
    {amount:-40, desc: "Book"},
    {amount:-200, desc: "Camera"},

];

export const TransactionContext = createContext(initialTrans);


//provider
export const TransactionProvider = ({children})=>{
    let [state, dispatch] = useReducer(TransactionReducer, initialTrans);

    function addTransaction(transObj){
    dispatch({
        type: 'ADD',
        payload:{
            amount:transObj.amount,
            desc:transObj.desc
        },
    })
    }
    return(
        <TransactionContext.Provider value= {{
            transactions:state,
            addTransaction
        }

        }>
          {children}
        </TransactionContext.Provider>
    )

}