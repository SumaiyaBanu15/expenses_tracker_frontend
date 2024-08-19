import React from "react";
import "./contentstyle.css";
import { calender, comment, dollar, trash } from "../../utilis/icons";
// import { Button } from "react-bootstrap";

function IncomeItem({
  id,
  title,
  amount,
  date,
  category,
  description,
  deleteItem,
  // indicatorColor,
  // type,
}) {
  console.log({ id, title, amount, date, category, description});

  // Format the date to display only the data part
  const formatedDate = new Date(date).toISOString().split('T')[0];

  return (
    <>
    <div className="item-container">
      <div className="list-icon">

      </div>
      <div className="content">
        <h5>{title}</h5>
        <div className="inner-content">
          <div className="text">
            <p>{dollar} {amount}</p>
            <p>{calender} {formatedDate}</p>
            {/* <p>
              {comment}
              {description}
            </p> */}
          </div>
          <div className="btn-container">
            <button className="deleteBtn">
              {trash} 
            </button>
          </div>
        </div>
      </div>
    </div>


      {/* <div className="income-item">
        <div className="income-item-icon">

          </div>
        <div className="income-item-header">
          <h5>{title}</h5>
          <span className="income-item-amount">
            {dollar} {amount}
          </span>
          </div>

          <div className="income-item-details">
              <p>
                {calender} {date}
              </p>
              <p>
                {comment}
                {description}
              </p>
             <p> Category: {category}</p>
           </div>
            <div className="btn-container">
              <Button onClick={() => deleteItem(id)}>{trash}</Button>
            </div> 
          </div>  */}
    </>
  );
}

export default IncomeItem;
