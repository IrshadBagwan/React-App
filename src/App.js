
import React from 'react';

// import ExpenseItem from './componenets/ExpenseItems.js';
import Expenses from './componenets/Expenses/Expenses.js';
const App=()=> {
  
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      locationofexpendeture:'paytm',
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, locationofexpendeture:'paytm', date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      locationofexpendeture:'paytm',
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      locationofexpendeture:'paytm',
      date: new Date(2021, 5, 12),
    },
  ]

  return (
   
    <div>
      <Expenses items={expenses}></Expenses>
    </div>
       
      );
}

export default App;
