import React from 'react'

import Chart from '../Chart/Chart';

const ExpensesChart = (props) => {
     const chartDataPoints = [
        {label: 'jan' , value: 0},
        {label: 'feb' , value: 1},
        {label: 'mar' , value: 3},
        {label: 'apr' , value: 4},
        {label: 'may' , value: 5},
        {label: 'jun' , value: 0},
        {label: 'jul' , value: 0},
        {label: 'aug' , value: 0},
        {label: 'sep' , value: 0},
        {label: 'oct' , value: 0},
        {label: 'nov' , value: 0},
        {label: 'dec' , value: 0},
     ];

     for(const expense in props.expenses){
        const expenseMonth=expense.date.getMonth();
        chartDataPoints[expenseMonth].value += expense.amount;
     }


  return 
   <Chart dataPoints={chartDataPoints}/>;

};

export default ExpensesChart;
