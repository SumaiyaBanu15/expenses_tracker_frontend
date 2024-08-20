import React, { useEffect } from "react";
import "./incomestyle.css";
import { useGlobalContext } from "../context/Context";
import IncomeForm from "../Form/IncomeForm";
import IncomeItem from "../ContentList/IncomeItem";

function Income() {
  const { getIncome, income, deleteIncome, totalIncome } = useGlobalContext();

  useEffect(() => {
    getIncome().then(() => {
      console.log(income);
    });
  }, []);

  // useEffect(() => {
  //   console.log(income);
  // }, [income]);

  return (
    <>
      <div className="main-container">
        <h2 className="heading2">Incomes</h2>
        <h3 className="total-income">
          Total Income: <span>${totalIncome()}</span>
        </h3>
        <div className="income-container">
          <div className="form-container">
            <IncomeForm />
          </div>
          <div className="incomes">
            {Array.isArray(income) ? (
              income.map((income) => {
                const {
                  _id,
                  title,
                  amount,
                  date,
                  category,
                  description,
                  type,
                } = income;
                return (
                  <IncomeItem
                    key={_id}
                    id={_id}
                    title={title}
                    amount={amount}
                    date={date}
                    type={type}
                    category={category}
                    description={description}
                    indicatorColor="var(--green)"
                    deleteItem={deleteIncome}
                  />
                );
              })
            ) : (
              <p> No Income data available</p>
            )}
          </div>
        </div>
      </div>
      {/* {addIncome} */}
      {/* {getIncome} */}
    </>
  );
}

export default Income;
