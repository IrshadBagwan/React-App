import React from 'react';
import ExpenseItem from "./ExpenseItems.js";
import "./Expenses.css";


const Expenses=(props)=>{
    return(
       <div className="expenses">
           
              {props.items.map((exp)=>{
                
                return(
                  <ExpenseItem title={exp.title} locexp={exp.locationofexpendeture} amount={exp.amount} date={exp.date}></ExpenseItem>
                )
       
               })} 
            

       </div>


    );
}

export default Expenses;
