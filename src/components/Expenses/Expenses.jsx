import React, { useEffect } from 'react'
import './expensestyle.css';
import ExpensesForm from '../Form/ExpensesForm';
import ExpensesItem from '../ContentList/ExpensesItem';
import { useGlobalContext } from '../context/Context';

function Expenses() {

  const { getExpenses, expenses, deleteExpenses } = useGlobalContext();
 
  useEffect(()=>{
    getExpenses().then(() => {
      console.log(expenses);
    })
    },[])

  return <>
<div className="main-container">
      <div className="expenses-container">
        <div className="form-container">
          <ExpensesForm />
        </div>
        <div className="expenses">

          {Array.isArray(expenses) ? (expenses.map((expenses) => {
            const {_id, title, amount, date, category, description } = expenses;
            return  <ExpensesItem 
            key={_id}
            id={_id}
            title={title}
            amount={amount}
            date={date}
            category={category}
            description={description}
            indicatorColor="var(--green)"
            deleteItem={deleteExpenses}
            />
          })
        ) : (
          <p> No Expenses data available</p>
        )}
        </div>
      </div>
    </div>
      
  </>
}

export default Expenses