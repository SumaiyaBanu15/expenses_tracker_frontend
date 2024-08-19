import React from 'react';
import './dashboardstyle.css';
import Chart from '../Chart/Chart';
import { dollar } from '../../utilis/icons'
import { useGlobalContext } from '../context/Context';


function Dashboard() {

  const { income, expenses, totalIncome, totalExpenses, totalBalance } = useGlobalContext();

  return <>
  <div className="dashboard-container">
  <h2 className='heading2'>All Transactions</h2>
  <div className="state-container">
    <div className="chart-container">
     <Chart /> 
     <div className="amount-container">
      <div className="income">
        <h4>Total Income</h4>
        <p> {dollar} {totalIncome()} </p>
      </div>
      <div className="expenses">
        <h4>Total Expenses</h4>
        <p> {dollar} {totalExpenses()} </p>
      </div>
      <div className="balance">
        <h4>Total Balance</h4>
        <p> {dollar} {totalBalance()} </p>
      </div>
     </div>
     <div className="minmaxAmount">
      <h4 className='salary-title'>Min <span> Salary</span> Max</h4>
      <div className="salary-item">
        <p>
          {Math.min(...income.map(item => item.amount))}
        </p>
        <p>
        {Math.max(...income.map(item => item.amount))}
        </p>
      </div>
      <h4 className='expenses-title'>Min <span> Expenses</span>Max</h4>
      <div className="expenses-item">
        <p>
          {Math.min(...expenses.map(item => item.amount))}
        </p>
        <p>
        {Math.max(...expenses.map(item => item.amount))}
        </p>
      </div>

     </div>
    </div>
  </div>
  </div>
  </>
}

export default Dashboard