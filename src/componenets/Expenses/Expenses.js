import React, {useState} from 'react';
import ExpenseFilter from './ExpenseFilter.js';
import ExpenseItem from "./ExpenseItems.js";
import "./Expenses.css";
import ExpensesChart from './ExpensesChart.js';
import ExpensesList from './ExpensesList.js';
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

            <ExpensesChart expenses ={FilterExpenses}/>
          <ExpensesList items={FilterExpenses}/>
            

       </div>


    );
    }

export default Expenses;
