

import ExpenseItem from './componenets/ExpenseItems.js';

function App() {
  
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
    <div className="App">
      <header className="App-header">
       
        
      
       
        {expenses.map((exp)=>{
          return(
            <ExpenseItem title={exp.title} locexp={exp.locationofexpendeture} amount={exp.amount} date={exp.date}></ExpenseItem>
          )
 
         })} 
        
         {/* <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem> 
         <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>  
          */}
      </header>
    </div>
  );
}

export default App;
