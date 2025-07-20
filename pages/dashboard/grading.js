import GradingTable from '../../components/GradingTable';
const sampleData = [
  { subject: 'Math', marks: 85, grade: 'A' },
  { subject: 'English', marks: 72, grade: 'B+' },
];

export default function GradingPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">CBC & 8-4-4 Grading</h1>
      <GradingTable data={sampleData} />
    </div>
  );
}
