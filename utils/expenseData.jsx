import fetchCategoryData from "./fetch"

const SumeData = () => {

    const category = "restaurant";
  
    const fetchCategoryData = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/category/${category}`);
            const data = await response.json();
            console.log(data)
            var total = 0;
            for (let i = 0; i < data.length; i++ ) {
                total = total + Number(data[i].amount);
                console.log(total)
            };
            var expenseData = {
                labels: ["restaurant","retail","entertainment","supermarket","rent","miscellaneous"],
                datasets: [
                    {
                    label: label,
                    data: [sume,300,150,180,100],
                    backgroundColor: ["rgba(255, 99, 132, 0.9)"] ,
                    borderColor: ["rgba(54, 162, 235, 1)"],
                    borderWidth: 1,
                    }
                ]
            }
            return expenseData;
        } catch(error) {
            console.log(error);
        }
    };
    fetchCategoryData();

    

    return (
           1
        );
    };

SumeData();
console.log("sume:", fetchCategoryData.expenseData);
let label = "Expenses"
let sume = 50.5

export var expenseData = {
    labels: ["restaurant","retail","entertainment","supermarket","rent","miscellaneous"],
    datasets: [
        {
        label: label,
        data: [sume,300,150,180,100],
        backgroundColor: ["rgba(255, 99, 132, 0.9)"] ,
        borderColor: ["rgba(54, 162, 235, 1)"],
        borderWidth: 1,
        }
    ]
}

