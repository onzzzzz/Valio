import { useState, useEffect } from "react";
import { Bar } from 'react-chartjs-2';
import { 
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    BarElement,
    LinearScale,
    Title,
    Tooltip,
    Legend,
)

const ExpenseChartArray = () => {

    const [categoryData, setCategoryData] = useState([]);    
    const [haveData, sethaveData] = useState(false);
    const [totalArary, setTotalArray] = useState([]);

    const category = ["restaurant","retail","entertainment","supermarket","rent","miscellaneous"];

    for (let i = 0; i < category.length; i++ ) {
      useEffect(() => {
        const fetchCategoryData = async () => {
          try {
            const response = await fetch(`http://localhost:3000/api/category/${category[i]}`);
            const data = await response.json();
            setCategoryData(data);
            sethaveData(true);
          } catch(error) {
            sethaveData(false);
            console.log(error);
          }
        };
        fetchCategoryData();
      }, []);
  
    };


    useEffect(() => {
      let total = 0;
      for (let i = 0; i < categoryData.length; i++ ) {
        total = total + Number(categoryData[i].amount);
      };
      total.toString
      total = total + ","
      totalArary.push(total);

    }, [categoryData]);

    console.log("array",totalArary);

    let label = "Expenses"

    var expenseData = {
        labels: ["restaurant","retail","entertainment","supermarket","rent","miscellaneous"],
        datasets: [
            {
            label: label,
            data: totalArary,
            backgroundColor: ["rgba(255, 99, 132, 0.9)"] ,
            borderColor: ["rgba(54, 162, 235, 1)"],
            borderWidth: 1,
            }
        ]
    }

    const options = {};
    return (

        <>
        <h1>{totalArary}</h1>
        <Bar options={options} data={expenseData}/>
        </>
    )
};

export default ExpenseChartArray