import React, { useContext, useState } from "react";
import AxiosService from "../../utilis/ApiService";

const DataContext = React.createContext();

const Context = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const [income, setIncome] = useState([]);
  const [error, setError] = useState(null);

  const addIncome = async (income) => {
    try {
      await AxiosService.post(`income/addincome`, income)
    } catch (error) {
        setError(error.response.data.message); 
    }
};
const getIncome = async () => {
    try {
        const res = await AxiosService.get(`income/getallincome`)
        const data = res.data;
        setIncome(Array.isArray(data) ? data : []);
    } catch (error) {
        setError(error.response.data.message); 
    }
}

const addExpenses = async (expenses) => {
    try {
      await AxiosService.post(`expenses/addexpenses`, expenses)
    } catch (error) {
        setError(error.response.data.message); 
    }
};

  return <DataContext.Provider value={{
    expenses,
    setExpenses,
    income,
    setIncome,
    error,
    addIncome,
    getIncome,
    addExpenses
    }}>
        {children}
    </DataContext.Provider>;
}

export const useGlobalContext = () => {
    return useContext(DataContext)
}

export default Context;