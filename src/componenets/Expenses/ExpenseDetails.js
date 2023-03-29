import React from 'react';
import "./ExpenseItem.css";
import Card from "../UI/Card";

import ExpenseDate from "./ExpenseDate.js";
const ExpenseDetail=(props)=>{
  
    return(
     
        <div className="expense-item">
       <ExpenseDate date={props.date}/>
       
          <div className="expense-item__description">
            <h2>{props.title}</h2>
          </div>
          <div className="expense-item__description">{props.location}</div>
          <div className="expense-item__price">{props.amount}</div>
        </div>
        
        
    );
}

export default ExpenseDetail;