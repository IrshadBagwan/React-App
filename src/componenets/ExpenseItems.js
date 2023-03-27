import "./ExpenseItem.css";

function ExpenseItem(props) {
  // const expenseDate = new Date(2021, 2, 28);
  // const expenseTitle = 'Car Insurance';
  // const expenseAmount = 294;
  // const LocationOfExpenditure = "Paytm";
  return (
    <div className="expense-item">
      {props.date.toISOString()}
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-ite__description pad">{props.locexp}</div>
      <div className="expense-item__price">{props.amount}</div>
    </div>
  );
}
export default ExpenseItem;


