import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = ()=>{
  
    const[EnteredTitle,setEnteredTitle] = useState('');
    const[EnteredAmount,setEnteredAmount] =useState('');
    const[EnteredDate,setEnteredDate]=useState('');
//    const[UserInput,setUserInput] = useState({
//         enteredTitle:"",
//         enteredAmount:"",
//         enteredDate:""
//     })

    const titlechangeHandler=(event)=>{
           
        setEnteredTitle(event.target.value);
        // setUserInput({
            
        //     ...UserInput,
        //     enteredTitle:event.target.value,
        // })

        // setUserInput((prevState)=>{
        //     return {...prevState, enteredTitle:event.target.value};
        // })
    }

    const AmountchangeHandler=(event)=>{

         setEnteredAmount(event.target.value);
        // setUserInput({
        // ...UserInput,
        // enteredAmount: event.target.value,
        // })

      
        }
    

    const datachangehandler=(event)=>{

         setEnteredDate(event.target.value);

        // setUserInput({
        // ...UserInput,
        // enteredDate: event.target.value,
        // })
    };

    const submitHandler=(event)=>{
          event.preventDefault();
        const expenseData ={
            title:EnteredTitle,
            amount:EnteredAmount,
            date:new Date(EnteredDate)
        };
        console.log(expenseData)

    };


   return <form onSubmit={submitHandler}>
       <div className="new-expense__controls">
           <div className="new-expense__control">
               <label>Title</label>
               <input type='text' onChange={titlechangeHandler}/>
               </div>
               <div className="new-expense__control">
               <label>Amount</label>
               <input type='number' min="0.01" step="0.01" onChange={AmountchangeHandler}/>
               </div>
               <div className="new-expense__control">
               <label>Date</label>
               <input type='date' min="2021-01-01" max="2023-12-21" onChange={datachangehandler}/>
               </div>
       </div>
       <div className="new-expense__actions">
           <button type="submit">Add Expense</button>
       </div>
   </form>
}
export default ExpenseForm;