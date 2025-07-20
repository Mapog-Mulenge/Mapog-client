import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="bg-gray-100 w-64 p-4 space-y-2">
      <h2 className="font-bold text-lg mb-2">Navigation</h2>
      <ul className="space-y-1">
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/dashboard/analytics">Analytics</Link></li>
        <li><Link href="/dashboard/schools">Schools</Link></li>
        <li><Link href="/dashboard/settings">Settings</Link></li>
      </ul>
    </aside>
  );
}
