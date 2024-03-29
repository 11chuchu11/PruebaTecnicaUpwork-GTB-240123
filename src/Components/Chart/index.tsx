import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import {faker} from '@faker-js/faker'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: 'top' as const,
		},
		title: {
			display: false,
			text: 'SmartWater',
		},
	},
}

const labels = ['1', '2', '3', '4', '5']

export const data = {
	labels,
	datasets: [
		{
			label: '',
			data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
			backgroundColor: '#1A3D7D',
		},
		{
			label: '',
			data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
			backgroundColor: '#367DFD',
		},
	],
}
const Chart = () => {
  // return <div className='w-full flex justify-center h-[350px]'>
		return <Bar options={{...options, aspectRatio:1, }} width={300} data={data}/>
  // </div>
};

export default Chart;
