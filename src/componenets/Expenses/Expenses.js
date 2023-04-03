import React, {useState} from 'react';
import ExpenseFilter from './ExpenseFilter.js';
import ExpenseItem from "./ExpenseItems.js";
import "./Expenses.css";
// import Card from "../UI/Card.js";



const Expenses=(props)=>{

  const[filteredYear,setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear =>{
    setFilteredYear(selectedYear);
  
  }

  const FilterExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })
    return(
       <div className="expenses">
           <ExpenseFilter selected = {filteredYear} onChangeFilter={filterChangeHandler}></ExpenseFilter>
              {FilterExpenses.map((exp)=>
                
                (
                  <ExpenseItem key={exp.id} title={exp.title} locexp={exp.locationofexpendeture} amount={exp.amount} date={exp.date} id={exp.id} ></ExpenseItem>
                )
       
               )} 
            

       </div>


    );
}

export default Expenses;
