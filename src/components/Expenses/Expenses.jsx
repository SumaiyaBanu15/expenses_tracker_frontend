import React, { useEffect } from "react";
import "./expensestyle.css";
import ExpensesForm from "../Form/ExpensesForm";
import ExpensesItem from "../ContentList/ExpensesItem";
import { useGlobalContext } from "../context/Context";

function Expenses() {
  const { getExpenses, expenses, deleteExpenses, totalExpenses } =
    useGlobalContext();

  useEffect(() => {
    getExpenses().then(() => {
      console.log(expenses);
    });
  }, []);

  return (
    <>
      <div className="main-container">
        <h2 className="heading2">Expenses</h2>
        <h3 className="total-expenses">
          Total Expenses: <span>${totalExpenses()}</span>
        </h3>
        <div className="expenses-container">
          <div className="form-container">
            <ExpensesForm />
          </div>
          <div className="expenses">
            {Array.isArray(expenses) ? (
              expenses.map((expenses) => {
                const {
                  _id,
                  title,
                  amount,
                  date,
                  category,
                  description,
                  type,
                } = expenses;
                return (
                  <ExpensesItem
                    key={_id}
                    id={_id}
                    title={title}
                    amount={amount}
                    date={date}
                    category={category}
                    type={type}
                    description={description}
                    indicatorColor="var(--green)"
                    deleteItem={deleteExpenses}
                  />
                );
              })
            ) : (
              <p> No Expenses data available</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Expenses;
