import React from "react";
import { dashboard, income, expenses } from "./icons";

export const menuItems = [
  {
    id: 1,
    title: "Dashboard",
    icon: dashboard,
    link: "/dashboard",
  },
  {
    id: 2,
    title: "Expenses",
    icon: expenses,
    link: "/expenses",
  },
  {
    id: 3,
    title: "Income",
    icon: income,
    link: "/income",
  },
];
