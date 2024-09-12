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

  const [categoryRestaurant, setCategoryRestaurant] = useState([]);    
  const [categoryRetail, setCategoryRetail] = useState([]);    
  const [categoryEntertainment, setCategoryEntertainment] = useState([]);    
  const [categorySupermarket, setCategorySupermarket] = useState([]);    
  const [categoryRent, setCategoryRent] = useState([]);    
  const [categoryMiscellaneous, setCategoryMiscellaneous] = useState([]);    
  
  const [haveData, sethaveData] = useState(false);

  // restaurant

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const response = await fetch(`/api/category/restaurant`);
        const data = await response.json();
        setCategoryRestaurant(data);
        sethaveData(true);
      } catch(error) {
        sethaveData(false);
        console.log(error);
      }
    };
    fetchCategoryData();
  }, []);

  var totalRestaurant = 0;
  for (let i = 0; i < categoryRestaurant.length; i++ ) {
    totalRestaurant = totalRestaurant + Number(categoryRestaurant[i].amount);
  };

  //retail

  useEffect(() => {
    const fetchCategoryRetail = async () => {
      try {
        const response = await fetch(`/api/category/retail`);
        const data = await response.json();
        setCategoryRetail(data);
        sethaveData(true);
      } catch(error) {
        sethaveData(false);
        console.log(error);
      }
    };
    fetchCategoryRetail();
  }, []);

  var totalRetail = 0;
  for (let i = 0; i < categoryRetail.length; i++ ) {
    totalRetail = totalRetail + Number(categoryRetail[i].amount);
  };

  //entertainment

    useEffect(() => {
      const fetchCategoryEntertainment = async () => {
        try {
          const response = await fetch(`/api/category/entertainment`);
          const data = await response.json();
          setCategoryEntertainment(data);
          sethaveData(true);
        } catch(error) {
          sethaveData(false);
          console.log(error);
        }
      };
      fetchCategoryEntertainment();
    }, []);

    var totalEntertainment = 0;
    for (let i = 0; i < categoryEntertainment.length; i++ ) {
      totalEntertainment = totalEntertainment + Number(categoryEntertainment[i].amount);
    };

  //supermarket

    useEffect(() => {
      const fetchCategorySupermarket = async () => {
        try {
          const response = await fetch(`/api/category/supermarket`);
          const data = await response.json();
          setCategorySupermarket(data);
          sethaveData(true);
        } catch(error) {
          sethaveData(false);
          console.log(error);
        }
      };
      fetchCategorySupermarket();
    }, []);

    var totalSupermarket = 0;
    for (let i = 0; i < categorySupermarket.length; i++ ) {
      totalSupermarket = totalSupermarket + Number(categorySupermarket[i].amount);
    };

  //rent

  useEffect(() => {
    const fetchCategoryRent = async () => {
      try {
        const response = await fetch(`/api/category/rent`);
        const data = await response.json();
        setCategoryRent(data);
        sethaveData(true);
      } catch(error) {
        sethaveData(false);
        console.log(error);
      }
    };
    fetchCategoryRent();
  }, []);

  var totalRent = 0;
  for (let i = 0; i < categoryRent.length; i++ ) {
    totalRent = totalRent + Number(categoryRent[i].amount);
  };

  //miscellaneous

  useEffect(() => {
    const fetchCategoryMiscellaneous = async () => {
      try {
        const response = await fetch(`/api/category/misc`);
        const data = await response.json();
        setCategoryMiscellaneous(data);
        sethaveData(true);
      } catch(error) {
        sethaveData(false);
        console.log(error);
      }
    };
    fetchCategoryMiscellaneous();
  }, []);

  var totalMiscellaneous = 0;
  for (let i = 0; i < categoryMiscellaneous.length; i++ ) {
    totalMiscellaneous = totalMiscellaneous + Number(categoryMiscellaneous[i].amount);
  };

    var expenseData = {
        labels: ["restaurant","retail","entertainment","supermarket","rent","miscellaneous"],
        datasets: [
            {
            label: "Expenses",
            data: [totalRestaurant,totalRetail,totalEntertainment,totalSupermarket,totalRent,totalMiscellaneous],
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