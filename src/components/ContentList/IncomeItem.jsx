import React from "react";
import "./contentstyle.css";
import { calender, comment, dollar, trash } from "../../utilis/icons";
import { Button } from "react-bootstrap";

function IncomeItem({
  id,
  title,
  amount,
  date,
  category,
  description,
  deleteItem,
  indicatorColor,
  type,
}) {
  return (
    <>
      <div className="container">
        <div className="icon"></div>
        <div className="content">
          <h5>{title}</h5>
          <div className="inner-content">
            <div className="text">
              <p>{dollar} 45</p>
              <p>
                {calender} {date}
              </p>
              <p>
                {comment}
                {description}
              </p>
            </div>
            <div className="btn-container">
              <Button>{trash}</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IncomeItem;
