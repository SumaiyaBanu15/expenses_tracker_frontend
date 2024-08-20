import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Images/logo.jpeg";

function LastPage() {
  let navigate = useNavigate();

  return (
    <>
      <img src={logo} alt="App Logo" className="logo-img" />
      <div className="lastPage">
        <h2 style={{ color: "var(--theme)" }}>Thank You!</h2>
        <br />
        <h3>
          &quot;Know the difference between your necessary and discretionary
          expenses&quot;
        </h3>
        <br />
        <h4> Happy Earning! Happy Saving!</h4>
        <br />
        <button
          onClick={() => navigate("/")}
          style={{
            backgroundColor: "var(--theme)",
            color: "var(--white)",
            border: "2px solid var(--white)",
            borderRadius: "20px",
            fontSize: "1.2rem",
            paddingBottom: "0.3rem",
          }}
        >
          {" "}
          Track Expenses{" "}
        </button>
      </div>
    </>
  );
}

export default LastPage;
