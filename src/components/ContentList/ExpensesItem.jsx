import React from 'react'
import './contentstyle.css';
import { calender, dollar, trash } from "../../utilis/icons";
import { dateFormat } from '../../utilis/DateFormat';

function ExpensesItem({
    id,
    title,
    amount,
    date,
    category,
    description,
    type,
    deleteItem, 
}
) {

      // Format the date to display only the data part
//   const formatedDate = new Date(date).toISOString().split('T')[0];

  return <>

<div className="item-container">
      {/* <div className="list-icon">

      </div> */}
      <div className="content">
        <h5>{title}</h5>
        <div className="inner-content">
          <div className="text">
            <p>{dollar} {amount}</p>
            <p>{calender} {dateFormat(date)}</p>
            {/* <p>
              {comment}
              {description}
            </p> */}
          </div>
          <div className="btn-container">
            <button className="deleteBtn"
            onClick={() => deleteItem(id)}>
              {trash} 
            </button>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default ExpensesItem