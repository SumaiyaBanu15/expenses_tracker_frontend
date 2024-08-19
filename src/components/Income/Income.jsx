import React, { useEffect } from 'react'
import './incomestyle.css';
import { useGlobalContext } from '../context/Context';
import IncomeForm from '../Form/IncomeForm';
import IncomeItem from '../ContentList/IncomeItem';

function Income() {

  const { getIncome, income, deleteIncome } = useGlobalContext();

  useEffect(()=>{
  getIncome().then(() => {
    console.log(income);
  })
  },[])

  // useEffect(() => {
  //   console.log(income);
  // }, [income]);

  return (
    <>
    <div className="main-container">
      <div className="income-container">
        <div className="form-container">
          <IncomeForm />
        </div>
        <div className="incomes">

          {Array.isArray(income) ? (income.map((income) => {
            const {_id, title, amount, date, category, description } = income;
            return  <IncomeItem 
            key={_id}
            id={_id}
            title={title}
            amount={amount}
            date={date}
            category={category}
            description={description}
            indicatorColor="var(--green)"
            deleteItem={deleteIncome}
            />
          })
        ) : (
          <p> No Income data available</p>
        )}
        </div>
      </div>
    </div>
      {/* {addIncome} */}
      {/* {getIncome}   */}
    
    </>
  )
}

export default Income