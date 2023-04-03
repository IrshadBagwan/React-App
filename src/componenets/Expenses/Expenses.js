import React, {useState} from 'react';
import ExpenseFilter from './ExpenseFilter.js';
import ExpenseItem from "./ExpenseItems.js";
import "./Expenses.css";



const Expenses=(props)=>{

  const[filteredYear,setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear =>{
    setFilteredYear(selectedYear);
  }
    return(
       <div className="expenses">
           <ExpenseFilter selected = {filteredYear} onChangeFilter={filterChangeHandler}></ExpenseFilter>
              {props.items.map((exp)=>{
                
                return(
                  <ExpenseItem ite={props.items} title={exp.title} locexp={exp.locationofexpendeture} amount={exp.amount} date={exp.date} id={exp.id} ></ExpenseItem>
                )
       
               })} 
            

       </div>


    );
}

export default Expenses;
