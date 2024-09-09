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

const ExpenseChart = () => {

    const [categoryData, setCategoryData] = useState([]);    
    const [haveData, sethaveData] = useState(false);

    const category = "restaurant";

    useEffect(() => {
      const fetchCategoryData = async () => {
        try {
          const response = await fetch(`http://localhost:3000/api/category/${category}`);
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

    var total = 0;
    for (let i = 0; i < categoryData.length; i++ ) {
      total = total + Number(categoryData[i].amount);
    };

    console.log(total)

    let label = "Expenses"

    var expenseData = {
        labels: ["restaurant","retail","entertainment","supermarket","rent","miscellaneous"],
        datasets: [
            {
            label: label,
            data: [total,300,150,180,100],
            backgroundColor: ["rgba(255, 99, 132, 0.9)"] ,
            borderColor: ["rgba(54, 162, 235, 1)"],
            borderWidth: 1,
            }
        ]
    }

    const options = {};
    return (
        <Bar options={options} data={expenseData}/>
    )
};

export default ExpenseChart