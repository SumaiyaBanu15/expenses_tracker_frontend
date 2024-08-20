import React, { useState } from "react";
import "./formstyle.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from "../context/Context";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";

function ExpensesForm() {
  const { addExpenses } = useGlobalContext();

  const [inputState, setInputState] = useState({
    title: "",
    amount: "",
    category: "",
    date: null,
    description: "",
  });

  const { title, amount, category, date, description } = inputState;

  const handleInput = (name) => (e) => {
    setInputState({ ...inputState, [name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // addExpenses(inputState);
    const expenseData = {
      ...inputState,
      amount: parseFloat(amount),
    };

    try {
      await addExpenses(expenseData);
      toast.success("Expenses added Successfully");
      setInputState({
        title: "",
        amount: "",
        category: "",
        date: null,
        description: "",
      }); //Reset the form after submission
    } catch (error) {
      toast.error("Failed to add Income, Please try again!");
    }
  };
  return (
    <>
      <div className="container">
        <Form onSubmit={handleSubmit}>
          <div className="input-control">
            <input
              type="text"
              value={title}
              name={"title"}
              placeholder="Enter Title"
              onChange={handleInput("title")}
            />
          </div>
          <div className="input-control">
            <input
              type="text"
              value={amount}
              name={"amount"}
              placeholder="Enter Amount"
              onChange={handleInput("amount")}
            />
          </div>
          <div className="input-control">
            <DatePicker
              id="date"
              placeholderText="Enter a Date"
              selected={date}
              dateFormat="dd/MM/yyyy"
              onChange={(date) => {
                setInputState({ ...inputState, date: date });
              }}
            />
          </div>
          <div className="input-control">
            <select
              required
              value={category}
              name="category"
              id="category"
              onChange={handleInput("category")}
              className="selects"
            >
              <option value="" disabled>
                Select Options
              </option>
              <option value="Rent">Rent</option>
              <option value="Shopping">Shopping</option>
              <option value="Entertainment">Entertainment</option>
              <option value="EMI">EMI</option>
              <option value="Foods & Snackes">Foods & Snackes</option>
            </select>
          </div>

          <div className="input-control">
            <textarea
              className="textareas"
              placeholder="Description..."
              value={description}
              name={"description"}
              onChange={handleInput("description")}
            ></textarea>
          </div>
          <div className="btn">
            <button>Add Expenses</button>
          </div>
        </Form>
      </div>
    </>
  );
}

export default ExpensesForm;
