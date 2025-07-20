import Sidebar from '../../components/Sidebar';

export default function Schools() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Manage Schools</h1>
        <p>Add, edit, or remove schools from your system.</p>
      </main>
    </div>
  );
}
