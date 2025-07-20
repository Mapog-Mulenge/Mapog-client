import Sidebar from '../../components/Sidebar';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'CBC Grading',
      data: [88, 92, 75, 95, 90, 87],
      borderColor: 'green',
      backgroundColor: 'rgba(34,197,94,0.2)',
    },
    {
      label: 'KNEC Exams',
      data: [70, 85, 80, 90, 78, 82],
      borderColor: 'blue',
      backgroundColor: 'rgba(59,130,246,0.2)',
    },
  ],
};

export default function Analytics() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Analytics</h1>
        <Line data={data} />
      </main>
    </div>
  );
}
