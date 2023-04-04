import React, {useState} from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm.js";
   const NewExpense=(props)=>{


    const[isEditing, setIsEditing]=useState(false);
    const onSaveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }
    const stopEditingHandler=()=>{
        setIsEditing(false);
    }
    const StartEditingHandler = ()=>{
        setIsEditing(true);
    }
    return <div className="new-expense">
       {!isEditing && <button onClick={StartEditingHandler}>Add New Expense</button>}
       { isEditing && <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onCancel={stopEditingHandler}/>}
    </div>

   }

   export default NewExpense;