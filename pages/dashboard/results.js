import KnecResults from '../../components/KnecResults';

const mockResults = [
  { studentName: 'Jane Doe', meanGrade: 'B+' },
  { studentName: 'John Smith', meanGrade: 'A-' },
];

export default function ResultsPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">KNEC Results</h1>
      <KnecResults results={mockResults} />
    </div>
  );
}
