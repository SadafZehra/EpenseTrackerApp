import './App.css';
import React from 'react'
import Child from './child'
//import {TransactionContext} from './transContext'
import {TransactionProvider} from './transContext'
function App() {
  return (
    <div >
      <TransactionProvider>
      <Child />
      </TransactionProvider>
      
          </div>
  );
}

export default App;
