import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white min-h-screen p-4">
      <h2 className="text-2xl font-semibold mb-4">Menu</h2>
      <ul className="flex flex-col gap-2">
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/dashboard/analytics">Analytics</Link></li>
        <li><Link href="/dashboard/grading">Grading</Link></li>
        <li><Link href="/dashboard/results">KNEC Results</Link></li>
        <li><Link href="/dashboard/settings">Settings</Link></li>
      </ul>
    </aside>
  );
}
