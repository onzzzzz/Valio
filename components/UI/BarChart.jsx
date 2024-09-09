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
import BarChartData from '@/utils/FakeData';
import SumeData from '@/utils/SumeData';

ChartJS.register(
  CategoryScale,
  BarElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
)

const BarChart = () => {
  const options = {};

  return (
    <>
    {/* <Bar options={options} data={BarChartData} /> */}
    <SumeData/>
    </>
  )
}

export default BarChart;