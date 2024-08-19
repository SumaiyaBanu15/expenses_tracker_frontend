import React from 'react'
import './style.css';
// import { useGlobalContext } from '../context/Context';
import IncomeForm from '../Form/IncomeForm';

function Income() {

  // const { addIncome } = useGlobalContext();
  return (
    <>
      <div className="income-container">
        <div className="form-container">
          <IncomeForm />
        </div>
      </div>
      {/* {addIncome} */}
      
    </>
  )
}

export default Income