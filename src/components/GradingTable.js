export default function GradingTable({ data }) {
  return (
    <table className="w-full border border-gray-300">
      <thead className="bg-gray-100">
        <tr>
          <th>Subject</th>
          <th>Marks</th>
          <th>Grade</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.subject}</td>
            <td>{row.marks}</td>
            <td>{row.grade}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
