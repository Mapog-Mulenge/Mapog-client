import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="bg-green-700 text-white flex justify-between p-4">
      <div className="font-bold text-xl">
        <Link href="/">Mapog MSMS</Link>
      </div>
      <div className="flex gap-4">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/login">Login</Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}
