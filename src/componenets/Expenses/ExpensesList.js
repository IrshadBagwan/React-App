   import React from "react";
   import ExpenseItem from './ExpenseItems.js';
   import './ExpensesList.css';
   
   
   const ExpensesList = (props)=>{
   

    if(props.items.length===0){
        return <h2 className="expenses-list__fallback">Found No Expenses</h2>
    };
    // if(props.items.length<2){
    //     return <h2 className="expenses-list__fallback">Found No Expenses</h2>
    // }
    let showmsg  = <h2 className="expenses-list__fallback">Please Add More....</h2>
    let show
    // if(props.items.length===1){
    //     show = props.items.map((exp)=>
                  
    //         (
    //           <ExpenseItem key={exp.id} title={exp.title} locexp={exp.locationofexpendeture} amount={exp.amount} date={exp.date} id={exp.id} ></ExpenseItem>
    //         )
        
         
    //        )+showmsg

    //         }

show = props.items.length === 1 ? showmsg:false;
   
                

     return (<ul className="expenses-list">
       {props.items.map((exp)=>
                
                  (
                    <ExpenseItem key={exp.id} title={exp.title} locexp={exp.locationofexpendeture} amount={exp.amount} date={exp.date} id={exp.id} ></ExpenseItem>
                  )
                  
              
               
                 )}
                 
                 {show}
              
     </ul>)
   }


   export default ExpensesList;