import React from 'react';
import ExpenseDetail from "./ExpenseDetails.js";
import "./Expenses.css";
const ExpenseItem=(props)=> {

  return (
   
    

   
    
    <ExpenseDetail amount={props.amount}  location={props.locexp}   title={props.title} date={props.date}/>
  
    
  );
}
export default ExpenseItem;


