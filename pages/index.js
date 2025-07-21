import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="p-4 text-center">
        <h1 className="text-4xl font-bold">Welcome to Mapog MSMS</h1>
        <p className="mt-2 text-gray-500">
          Streamline your school operations effortlessly.
        </p>
      </main>
      <Footer />
    </>
  );
}
