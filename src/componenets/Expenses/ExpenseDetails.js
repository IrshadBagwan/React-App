import React, {useState} from 'react';
import "./ExpenseItem.css";
import Card from "../UI/Card";

import ExpenseDate from "./ExpenseDate.js";
import Expenses from './Expenses';
const ExpenseDetail=(props)=>{

  const [title,setTitle] = useState(props.title);
  
  const [amount,setAmount] = useState(props.amount);
  function changeExpenses(){
     setAmount("$100");

  }

  function clickhandler(){
    
  setTitle('updated!');
   console.log(title);
  //   return(
  // props.itm.map((el,i)=>{
       
    
  //     if(el[i].id===id){
  //       props.itm.splice(i,1);
  //   }
  //   }))
  }
    return(
     
        <div className="expense-item">
       <ExpenseDate date={props.date}/>
       
          <div className="expense-item__description">
            
            
            <h2>{title}</h2>
          </div>
          <div className="expense-item__description">{props.location}</div>
          <div className="expense-item__price">{amount}</div>
          <button onClick={clickhandler}>Delete Task</button>
          <button onClick={changeExpenses}>change Amount</button>
        </div>
        
        
        
    );
}

export default ExpenseDetail;