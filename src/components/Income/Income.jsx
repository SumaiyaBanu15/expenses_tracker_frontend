import React, { useEffect } from 'react'
import './style.css';
import { useGlobalContext } from '../context/Context';
import IncomeForm from '../Form/IncomeForm';

function Income() {

  const { getIncome, income } = useGlobalContext();

  useEffect(()=>{
  getIncome()
  },[income])
  return (
    <>
      <div className="income-container">
        <div className="form-container">
          <IncomeForm />
        </div>
      </div>
      {/* {addIncome} */}
      {/* {getIncome}   */}
    
    </>
  )
}

export default Income