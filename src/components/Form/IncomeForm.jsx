import React, { useState } from "react";
import "./style.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from "../context/Context";
import Form from "react-bootstrap/Form";

function IncomeForm() {
  const { addIncome } = useGlobalContext();

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

  const handleSubmit = (e) => {
    e.preventDefault();
    addIncome(inputState);
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
            <select
              required
              value={category}
              name="category"
              id="category"
              onChange={handleInput("category")
              }
              className="selects"
            >
              <option value="" disabled>
                Select Options
              </option>
              <option value="Salary">Salary</option>
              <option value="Business">Business</option>
              <option value="Investments">Invesments</option>
              <option value="YouTube">YouTube</option>
              <option value="Other">Other</option>
            </select>
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
            <textarea
              className="textareas"
              placeholder="Description..."
              value={description}
              name={"description"}
              onChange={handleInput("description")}
            ></textarea>
          </div>
          <div className="btn">
            <button>Add Income</button>
          </div>
        </Form>
      </div>
    </>
  );
}

export default IncomeForm;
