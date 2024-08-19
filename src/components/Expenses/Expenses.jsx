import React from 'react'
import './expensestyle.css';
import ExpensesForm from '../Form/ExpensesForm';

function Expenses() {
  return <>
  <div className="expenses-container">
        <div className="form-container">
        <ExpensesForm />
        </div>
      </div>
      
  </>
}

export default Expenses