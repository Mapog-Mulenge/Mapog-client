import Sidebar from '../../components/Sidebar';

export default function Settings() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Account Settings</h1>
        <p>Update your profile information, change password, and more.</p>
      </main>
    </div>
  );
}
