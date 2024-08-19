import React from 'react'
import './chartstyle.css';
import { Chart as ChartJs, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useGlobalContext } from '../context/Context';
import { dateFormat } from '../../utilis/DateFormat';


ChartJs.register(
    CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement
)


function Chart() {
   const { income, expenses } = useGlobalContext();

    const data = {
        labels : income.map((income) => {
            const { date } = income
            return dateFormat(date)
        }),
        datasets : [
            { 
                label: 'Income',
                data: [...income.map((income) => {
                    const { amount } = income
                    return amount 
                })],
                backgroundColor: 'green',
                tension : 0.2
            },
            { 
                label: 'Expenses',
                data: [...expenses.map((expenses) => {
                    const { amount } = expenses
                    return amount 
                })],
                backgroundColor: 'red',
                tension : 0.2
            },
        ]
    
    }


  return <>
  <div className="chart-container">
    <Line data={data}/>
  </div>
  </>
}

export default Chart