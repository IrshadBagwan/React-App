
import ExpenseDetail from "./ExpenseDetails.js";

function ExpenseItem(props) {

  return (
    <div className='expense-item'>

   
    
    <ExpenseDetail amount={props.amount}  location={props.locexp}   title={props.title} date={props.date}/>
    
    </div>
  );
}
export default ExpenseItem;


