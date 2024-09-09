// data.collection.aggregate([
//     {"$group":{
//       "_id":{"month":{"$month":"$date"},"year":{"$year":"$date"}},
//       totalAmount: { $sum: "$amount" },
//       count: { $sum: 1 }
//     }},
//     {"$sort":{"month":-1,"year":-1}}
//   ])

import { useState, useEffect } from "react";

const SumeData = () => {


  const category = "restaurant";

    const [categoryData, setCategoryData] = useState([]);    
    const [haveData, sethaveData] = useState(false);

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
      console.log(total)
    };

    if (!haveData) {
      return <div>Loading...</div>
    } else {
      return total
    };
    

{/* <ErrorBoundary>
            <Chart chartData={chartData} />
          </ErrorBoundary> */}

  
    // labels: ["restaurant","retail","entertainment","supermarket","rent","miscellaneous"],
    // datasets: [
    //     {
    //         label: "Expenses",
    //         data: [1200,300,150,180,100],
    //         backgroundColor: ["rgba(255, 99, 132, 0.9)"] ,
    //         borderColor: ["rgba(54, 162, 235, 1)"],
    //         borderWidth: 1,
    //     }
    // ]
  
}

export default SumeData ;