import React, { useContext, useState } from "react";
import AxiosService from "../../utilis/ApiService";
import { toast } from "react-toastify";

const DataContext = React.createContext();

const Context = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const [income, setIncome] = useState([]);
  const [error, setError] = useState(null);

//   Income
  const addIncome = async (income) => {
    try {
      await AxiosService.post(`income/addincome`, income)
    //   toast.success("Income added Successfully")
    } catch (error) {
        setError(error.response.data.message); 
        toast.error("Failed to add income")
    }
};
const getIncome = async () => {
    try {
        const res = await AxiosService.get(`income/getallincome`);
        const data = res.data.allIncome;
        setIncome(Array.isArray(data) ? data : []);
    } catch (error) {
        // console.error("Error is", error)
        setError(error.response?.data?.message); 
        toast.error("Failed to get income")
    }
}

const deleteIncome = async (id) => {
    try {
       await AxiosService.delete(`income/deleteincome/${id}`) 
       toast.success("Income deleted Successfully")
       setIncome(income.filter((item) => item._id !== id));
    } catch (error) {
        setError(error.response.data.message); 
        toast.error("Failed to delete income")
    }
    
}

// Expenses
const addExpenses = async (expenses) => {
    try {
      await AxiosService.post(`expenses/addexpenses`, expenses)
    //   toast.success("Expenses added successfully")
    } catch (error) {
        setError(error.response.data.message); 
        toast.error("Failed to add expense")
    }
};

const getExpenses = async () =>{
    try {
        const res = await AxiosService.get(`expenses/getexpenses`);
        const data = res.data.allExpenses;
        setExpenses(Array.isArray(data) ? data : []);
    } catch (error) {
        setError(error.response.data.message); 
        toast.error("Failed to get expense")
    }
}

const deleteExpenses = async (id) => {
    try {
        await AxiosService.delete(`expenses/deleteexpenses/${id}`)
        toast.success("Expenses deleted successfully")
        setExpenses(expenses.filter((item) => item._id !== id));
    } catch (error) {
        setError(error.response.data.message); 
        toast.error("Failed to delete expense")
    }
}

  return <DataContext.Provider value={{
    expenses,
    setExpenses,
    income,
    setIncome,
    error,
    addIncome,
    getIncome,
    deleteIncome,
    addExpenses,
    getExpenses,
    deleteExpenses

    }}>
        {children}
    </DataContext.Provider>;
}

export const useGlobalContext = () => {
    return useContext(DataContext)
}

export default Context;