export default function KnecResults({ results }) {
  return (
    <div>
      <h3 className="text-lg font-bold mb-2">KNEC Results</h3>
      {results.length === 0 ? (
        <p>No results uploaded.</p>
      ) : (
        <ul>
          {results.map((r, i) => (
            <li key={i} className="border p-2 mb-1">
              {r.studentName}: {r.meanGrade}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
