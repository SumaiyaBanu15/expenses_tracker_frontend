import React, { useContext, useState } from "react";
import AxiosService from "../../utilis/ApiService";

const DataContext = React.createContext();

export const Context = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const [income, setIncome] = useState([]);
  const [error, setError] = useState(null);

  const addIncome = async (income) => {
    try {
      const response = await AxiosService.post(`income/addincome`, income)
    } catch (error) {
        setError(error.response.data.message); 
    }
};
const addExpenses = async (expenses) => {
    try {
      const response = await AxiosService.post(`expenses/addexpenses`, expenses)
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
    addExpenses
    }}>
        {children}
    </DataContext.Provider>;
}

// export default Context;

export const useGlobalContext = () => {
    return useContext(DataContext)
}